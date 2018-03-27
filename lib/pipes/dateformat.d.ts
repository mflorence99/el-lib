import { PipeTransform } from '@angular/core';
/**
 * Pipe wrapper around moment.js
 */
export declare class DateFormatPipe implements PipeTransform {
    transform(date: Date, fmt: string): string;
}
