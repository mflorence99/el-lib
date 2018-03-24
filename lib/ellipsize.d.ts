import { PipeTransform } from '@angular/core';
/**
 * Truncates a long string after N characters, then appends an ellipsis.
 * By default, N is 100.
 *
 * <a [href]="{{'very_long_URL'}}">
 *   {{'very_long_URL' | libEllipsize:64 | libBreakable}}
 * </a>
 *
 */
export declare class EllipsizePipe implements PipeTransform {
    transform(s: string, max?: number, dflt?: string): string;
}
