<?php

namespace Phpactor\Rpc\Handler;

use Phpactor\CodeTransform\Domain\Refactor\ExtractMethod;
use Phpactor\Rpc\Response\Input\TextInput;
use Phpactor\Rpc\Response\ReplaceFileSourceResponse;
use Phpactor\CodeTransform\Domain\SourceCode;

class ExtractMethodHandler extends AbstractHandler
{
    const NAME = 'extract_method';
    const PARAM_SOURCE = 'source';
    const PARAM_PATH = 'path';

    const PARAM_METHOD_NAME = 'method_name';
    const PARAM_OFFSET_START = 'offset_start';
    const PARAM_OFFSET_END = 'offset_end';

    const INPUT_LABEL_NAME = 'Method name: ';

    /**
     * @var ExtractMethod
     */
    private $extractMethod;

    public function __construct(ExtractMethod $extractMethod)
    {
        $this->extractMethod = $extractMethod;
    }

    public function name(): string
    {
        return self::NAME;
    }

    public function defaultParameters(): array
    {
        return [
            self::PARAM_PATH => null,
            self::PARAM_SOURCE => null,
            self::PARAM_METHOD_NAME => null,
            self::PARAM_OFFSET_START => null,
            self::PARAM_OFFSET_END => null,
        ];
    }

    public function handle(array $arguments)
    {
        $this->requireArgument(self::PARAM_METHOD_NAME, TextInput::fromNameLabelAndDefault(
            self::PARAM_METHOD_NAME,
            self::INPUT_LABEL_NAME,
            ''
        ));

        $this->requireArgument(self::PARAM_OFFSET_START, TextInput::fromNameLabelAndDefault(
            self::PARAM_OFFSET_START,
            'Offset start: '
        ));

        $this->requireArgument(self::PARAM_OFFSET_END, TextInput::fromNameLabelAndDefault(
            self::PARAM_OFFSET_END,
            'Offset end: '
        ));

        if ($this->hasMissingArguments($arguments)) {
            return $this->createInputCallback($arguments);
        }

        $sourceCode = $this->extractMethod->extractMethod(
            SourceCode::fromString($arguments[self::PARAM_SOURCE]),
            $arguments[self::PARAM_OFFSET_START],
            $arguments[self::PARAM_OFFSET_END],
            $arguments[self::PARAM_METHOD_NAME]
        );

        return ReplaceFileSourceResponse::fromPathAndSource(
            $arguments[self::PARAM_PATH],
            (string) $sourceCode
        );
    }
}
