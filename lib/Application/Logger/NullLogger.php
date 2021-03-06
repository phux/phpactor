<?php

namespace Phpactor\Application\Logger;

use Phpactor\Filesystem\Domain\FilePath;
use Phpactor\ClassMover\FoundReferences;
use Phpactor\ClassMover\Domain\Name\FullyQualifiedName;

class NullLogger implements ClassCopyLogger, ClassMoverLogger
{
    public function copying(FilePath $srcPath, FilePath $destPath)
    {
    }

    public function replacing(FilePath $path, FoundReferences $references, FullyQualifiedName $replacementName)
    {
    }

    public function moving(FilePath $srcPath, FilePath $destPath)
    {
    }
}
