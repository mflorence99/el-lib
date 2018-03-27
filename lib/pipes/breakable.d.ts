import { PipeTransform } from '@angular/core';
/**
 * Makes a string breakable by adding a zero-width space after otherwise
 * non-breakabke soecial characters (like underscore).
 *
 * <a [href]="{{'very_long_URL'}}">
 *   {{'very_long_URL' | libBreakable}}
 * </a>
 *
 */
export declare class BreakablePipe implements PipeTransform {
    transform(s: string, dflt?: string): string;
}
