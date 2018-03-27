import { PipeTransform } from '@angular/core';
/**
 * Converts text where < and > are encoded as &lt; and &gt; into real HTML.
 *
 * NOTE: must pipe into [innerHTML]
 */
export declare class HTMLifyPipe implements PipeTransform {
    transform(s: string, dflt?: string): string;
}
