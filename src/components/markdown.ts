import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

declare var marked: any;

/** Markdown component */

@Component({
  selector: 'lib-markdown',
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div
      class="content"
      #markdown>
      <ng-content></ng-content>
    </div>`
})

export class MarkdownComponent implements AfterViewInit  {

  @ViewChild('markdown') markdown;

  // lifecycle methods

  ngAfterViewInit() {
    const el = this.markdown.nativeElement;
    el.innerHTML = marked(el.innerHTML);
  }

}
