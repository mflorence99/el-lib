import { PipeTransform } from '@angular/core';
/**
 * Pipe wrapper around numeral.js
 */
export declare class NumeralPipe implements PipeTransform {
    transform(value: any, fmt: string, dflt?: string): string;
}
