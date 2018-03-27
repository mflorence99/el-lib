import { PipeTransform } from '@angular/core';
/**
 * Converts substrings that look like URLs into <a href="...">...</a> sequences.
 *
 * NOTE: must pipe into [innerHTML]
 */
export declare class LinkifyPipe implements PipeTransform {
    transform(s: string, dflt?: string): string;
}
