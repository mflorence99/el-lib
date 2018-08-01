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
      top: 50%;
    }

    .scroller:hover {
      opacity: 0.9;
    }

    .scroller.left {
      left: 16px;
    }

    .scroller.right {
      right: 16px;
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

    </div>
  `
})

export class ScrollContainerComponent {

  @Input() numScrollSteps = 10;
  @Input() scrollDuration = 250;

  @HostListener('mouseover') onMouseOver() {
    this.dimensions();
  }

  @HostListener('window:resize') onResize() {
    this.dimensions();
  }

  @Output() onScroll = new EventEmitter<number>();

  private clientLeft;
  private clientWidth;

  private scrollLeft;
  private scrollWidth;

  /** ctor */
  constructor(private element: ElementRef) { }

  /** Can we scroll left? */
  canScrollLeft(): boolean {
    return (this.scrollWidth - this.scrollLeft - 1) > this.clientWidth;
  }

  /** Can we scroll right? */
  canScrollRight(): boolean {
    return this.scrollLeft > this.clientLeft;
  }

  /** Scroll left */
  doScrollLeft(): void {
    if (this.canScrollLeft()) {
      const cx = Math.min(this.clientWidth / 2, 
                          this.scrollWidth - this.clientWidth - this.scrollLeft);
      this.scroll(cx, +1);
    }
  }

  /** Scroll right */
  doScrollRight(): void {
    if (this.canScrollRight()) {
      const cx = Math.min(this.clientWidth / 2, this.scrollLeft);
      this.scroll(cx, -1);
    }
  }

  // private methods

  private dimensions(): void {
    const el = this.element.nativeElement;
    this.clientLeft = el.clientLeft;
    this.clientWidth = el.clientWidth;
    this.scrollLeft = el.scrollLeft;
    this.scrollWidth = el.scrollWidth;
  }

  private scroll(cx: number,
                 dir: number): void {
    const el = this.element.nativeElement;
    const step = Math.round(cx / this.numScrollSteps);
    const rem = cx - (step * this.numScrollSteps);
    timer(0, this.scrollDuration / this.numScrollSteps)
      .pipe(take(this.numScrollSteps))
      .subscribe((ix: number) => {
        const dx = (step + ((ix === 0) ? rem : 0)) * dir;
        el.scrollLeft += dx;
        this.onScroll.emit(dx);
      }, undefined, () => this.dimensions());
  }

}
