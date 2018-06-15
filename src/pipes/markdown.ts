import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

declare var marked: any;

/**
 * Pipe wrapper around marked.js
 */

@Pipe({ name: 'libMarkdown' })

export class MarkdownPipe implements PipeTransform {

  transform(md: string,
            dflt = ''): string {
    return md? marked(md) : dflt;
  }

}
