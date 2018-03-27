import { PipeTransform } from '@angular/core';
/**
 * Pipe wrapper around moment.js
 */
export declare class DurationPipe implements PipeTransform {
    transform(value: any, fmt: any): string;
}
