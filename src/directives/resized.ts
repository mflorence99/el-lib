import { AfterViewInit } from '@angular/core';
import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { ResizeSensor } from 'css-element-queries';

import { nextTick } from '../utils';

@Directive({
  selector: '[libResized]'
})
export class ResizedDirective implements AfterViewInit {

  @Output()
  readonly libResized = new EventEmitter<ResizedEvent>();

  private oldWidth: number;
  private oldHeight: number;

  constructor(private readonly element: ElementRef) { }

  ngAfterViewInit(): void {
    // tslint:disable-next-line:no-unused-expression
    new ResizeSensor(this.element.nativeElement, x => this.onResized());
    nextTick(() => this.onResized());
  }

  private onResized(): void {
    const newWidth = this.element.nativeElement.clientWidth;
    const newHeight = this.element.nativeElement.clientHeight;

    if (newWidth === this.oldWidth && newHeight === this.oldHeight) {
      return;
    }

    const event = new ResizedEvent(
      this.element,
      newWidth,
      newHeight,
      this.oldWidth,
      this.oldHeight);

    this.oldWidth = this.element.nativeElement.clientWidth;
    this.oldHeight = this.element.nativeElement.clientHeight;

    this.libResized.next(event);
  }

}

export class ResizedEvent {
  constructor(
    readonly element: ElementRef,
    readonly newWidth: number,
    readonly newHeight: number,
    readonly oldWidth: number,
    readonly oldHeight: number
  ) { }
}
