import { PipeTransform } from '@angular/core';
/**
 * Pipe wrapper around marked.js
 */
export declare class MarkdownPipe implements PipeTransform {
    transform(md: string, dflt?: string): string;
}
