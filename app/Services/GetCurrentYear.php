<?php

namespace App\Services;

use Carbon\Carbon;

class GetCurrentYear
{
    public function __construct(
        public string $currentYear = ''
    ) {
    }

    public function __invoke(): string
    {
        $this->currentYear = Carbon::parse()->format('Y');

        return $this->currentYear;
    }
}
