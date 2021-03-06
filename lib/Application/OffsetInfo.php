<?php

namespace Phpactor\Application;

use Phpactor\WorseReflection\Reflector;
use Phpactor\WorseReflection\Core\SourceCode;
use Phpactor\WorseReflection\Core\Offset;
use Phpactor\WorseReflection\Core\Type;
use Phpactor\WorseReflection\Core\Reflection\Inference\Variable;

final class OffsetInfo
{
    /**
     * @var Reflector
     */
    private $reflector;

    /**
     * @var Helper\FilesystemHelper
     */
    private $filesystemHelper;

    /**
     * @var Helper\ClassFileNormalizer
     */
    private $classFileNormalizer;

    public function __construct(
        Reflector $reflector,
        Helper\ClassFileNormalizer $classFileNormalizer
    ) {
        $this->reflector = $reflector;
        $this->classFileNormalizer = $classFileNormalizer;
        $this->filesystemHelper = new Helper\FilesystemHelper();
    }

    public function infoForOffset(string $sourcePath, int $offset, $showFrame = false): array
    {
        $result = $this->reflector->reflectOffset(
            SourceCode::fromString(
                $this->filesystemHelper->contentsFromFileOrStdin($sourcePath)
            ),
            Offset::fromInt($offset)
        );

        $symbolContext = $result->symbolContext();
        $return = [
            'symbol' => $symbolContext->symbol()->name(),
            'symbol_type' => $symbolContext->symbol()->symbolType(),
            'start' => $symbolContext->symbol()->position()->start(),
            'end' => $symbolContext->symbol()->position()->end(),
            'type' => (string) $symbolContext->type(),
            'class_type' => (string) $symbolContext->containerType(),
            'value' => var_export($symbolContext->value(), true),
            'offset' => $offset,
            'type_path' => null,
        ];

        if ($showFrame) {
            $frame = [];

            foreach (['locals', 'properties'] as $assignmentType) {
                /** @var $local Variable */
                foreach ($result->frame()->$assignmentType() as $local) {
                    $info = sprintf(
                        '%s = (%s) %s',
                        $local->name(),
                        $local->symbolContext()->type(),
                        str_replace(PHP_EOL, '', var_export($local->symbolContext()->value(), true))
                    );

                    $frame[$assignmentType][$local->offset()->toInt()] = $info;
                }
            }
            $return['frame'] = $frame;
        }

        if (Type::unknown() === $symbolContext->type()) {
            return $return;
        }

        $return['type_path'] = $symbolContext->type()->isClass() ? $this->classFileNormalizer->classToFile((string) $symbolContext->type(), true) : null;
        $return['class_type_path'] = $symbolContext->containerType() && false === $symbolContext->containerType()->isPrimitive() ? $this->classFileNormalizer->classToFile($return['class_type'], true) : null;

        return $return;
    }
}
