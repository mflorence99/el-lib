import { PipeTransform } from '@angular/core';
/**
 * Pipe wrapper around moment.js
 */
export declare class UTCFormatPipe implements PipeTransform {
    transform(date: Date, fmt: string): string;
}
