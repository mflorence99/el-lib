import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

import { take } from 'rxjs/operators';
import { timer } from 'rxjs';

/**
 * lib-scroll-container
 *
 * Supports horizontal scrolling like Gmail attachments etc
 */

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'lib-scroll-container',
  styles: [`
    :host {
      display: block;
      height: 100%;
      overflow: auto;
    }

    .scrollable {
      height: 100%;
      position: relative;
    }

    .scroller {
      color: var(--mat-grey-600);
      cursor: pointer;
      opacity: 0.5;
      position: fixed;
      transition: opacity 0.25s ease-in-out;
    }

    .scroller:hover {
      opacity: 0.9;
    }

    .scroller.left {
      left: 16px;
      top: calc(50% - 32px);
    }

    .scroller.right {
      right: 16px;
      top: calc(50% - 32px);
    }

    .scroller.up {
      left: calc(50% - 32px);
      top: 32px;
    }

    .scroller.down {
      left: calc(50% - 32px);
      bottom: 32px;
    }
  `],
  template: `
    <div class="scrollable">
      <ng-content></ng-content>

      <div
        (click)="doScrollLeft()"
        *ngIf="canScrollLeft()"
        class="left scroller">

        <fa-icon
          [icon]="['fas', 'chevron-circle-left']"
          size="4x">
        </fa-icon>

      </div>

      <div
        (click)="doScrollRight()"
        *ngIf="canScrollRight()"
        class="right scroller">

        <fa-icon
          [icon]="['fas', 'chevron-circle-right']"
          size="4x">
        </fa-icon>

      </div>

      <div
        (click)="doScrollUp()"
        *ngIf="canScrollUp()"
        class="up scroller">

        <fa-icon
          [icon]="['fas', 'chevron-circle-up']"
          size="4x">
        </fa-icon>

      </div>

      <div
        (click)="doScrollDown()"
        *ngIf="canScrollDown()"
        class="down scroller">

        <fa-icon
          [icon]="['fas', 'chevron-circle-down']"
          size="4x">
        </fa-icon>

      </div>

    </div>
  `
})

export class ScrollContainerComponent {

  @Input() showScrollLeft: boolean;
  @Input() showScrollRight: boolean;

  @Input() showScrollUp: boolean;
  @Input() showScrollDown: boolean;

  @Input() numScrollSteps = 10;
  @Input() scrollDuration = 250;

  @Output() onScroll = new EventEmitter<number>();

  private clientLeft;
  private clientWidth;

  private clientTop;
  private clientHeight;

  private scrollLeft;
  private scrollWidth;

  private scrollTop;
  private scrollHeight;

  /** ctor */
  constructor(private element: ElementRef) { }

  /** Can we scroll left? */
  canScrollLeft(): boolean {
    return this.showScrollLeft && ((this.scrollWidth - this.scrollLeft - 1) > this.clientWidth);
  }

  /** Can we scroll right? */
  canScrollRight(): boolean {
    return this.showScrollRight && (this.scrollLeft > this.clientLeft);
  }

  /** Can we scroll up? */
  canScrollUp(): boolean {
    return this.showScrollUp && (this.scrollTop > this.clientTop);
  }

  /** Can we scroll down? */
  canScrollDown(): boolean {
    return this.showScrollDown && ((this.scrollHeight - this.scrollTop - 1) > this.clientHeight);
  }

  /** Scroll left */
  doScrollLeft(): void {
    if (this.canScrollLeft()) {
      const cx = Math.min(this.clientWidth / 2, 
                          this.scrollWidth - this.clientWidth - this.scrollLeft);
      this.scroll(cx, 'horz', +1);
    }
  }

  /** Scroll right */
  doScrollRight(): void {
    if (this.canScrollRight()) {
      const cx = Math.min(this.clientWidth / 2, this.scrollLeft);
      this.scroll(cx, 'horz', -1);
    }
  }

  /** Scroll up */
  doScrollUp(): void {
    if (this.canScrollUp()) {
      const cx = Math.min(this.clientHeight / 2, this.scrollTop);
      this.scroll(cx, 'vert', -1);
    }
  }

  /** Scroll down */
  doScrollDown(): void {
    if (this.canScrollDown()) {
      const cx = Math.min(this.clientHeight / 2,
        this.scrollHeight - this.clientHeight - this.scrollTop);
      this.scroll(cx, 'vert', +1);
    }
  }

  // listeners

  @HostListener('mouseover') onMouseOver() {
    this.dimensions();
  }

  @HostListener('scroll') onScroller() {
    this.dimensions();
  }

  @HostListener('window:resize') onResize() {
    this.dimensions();
  }

  // private methods

  private dimensions(): void {
    const el = this.element.nativeElement;
    this.clientLeft = el.clientLeft;
    this.clientWidth = el.clientWidth;
    this.clientTop = el.clientTop;
    this.clientHeight = el.clientHeight;
    this.scrollLeft = el.scrollLeft;
    this.scrollWidth = el.scrollWidth;
    this.scrollTop = el.scrollTop;
    this.scrollHeight = el.scrollHeight;
  }

  private scroll(cx: number,
                 axis: 'horz' | 'vert',
                 dir: number): void {
    const el = this.element.nativeElement;
    const step = Math.round(cx / this.numScrollSteps);
    const rem = cx - (step * this.numScrollSteps);
    timer(0, this.scrollDuration / this.numScrollSteps)
      .pipe(take(this.numScrollSteps))
      .subscribe((ix: number) => {
        const dx = (step + ((ix === 0) ? rem : 0)) * dir;
        if (axis === 'horz')
          el.scrollLeft += dx;
        else el.scrollTop += dx;
        this.onScroll.emit(dx);
      }, undefined, () => this.dimensions());
  }

}
