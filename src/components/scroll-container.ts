import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
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
        (click)="scrollLeft()"
        *ngIf="canScrollLeft()" 
        class="left scroller">

        <fa-icon
          [icon]="['fas', 'chevron-circle-left']"
          size="4x">
        </fa-icon>

      </div>

      <div
        (click)="scrollRight()"
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

  @Output() onScroll = new EventEmitter<number>();

  /** ctor */
  constructor(private element: ElementRef) { }

  /** Can we scroll left? */
  canScrollLeft(): boolean {
    const el = this.element.nativeElement;
    return (el.scrollWidth - el.scrollLeft - 1) > el.clientWidth;
  }

  /** Can we scroll right? */
  canScrollRight(): boolean {
    const el = this.element.nativeElement;
    return el.scrollLeft > el.clientLeft;
  }

  /** Scroll left */
  scrollLeft(): void {
    const el = this.element.nativeElement;
    const cx = Math.min(el.clientWidth / 2, el.scrollWidth - el.clientWidth - el.scrollLeft);
    this.scroll(el, cx, +1);
  }

  /** Scroll right */
  scrollRight(): void {
    const el = this.element.nativeElement;
    const cx = Math.min(el.clientWidth / 2, el.scrollLeft);
    this.scroll(el, cx, -1);
  }

  // private methods

  private scroll(el: HTMLElement,
                 cx: number,
                 dir: number): void {
    const step = Math.round(cx / this.numScrollSteps);
    const rem = cx - (step * this.numScrollSteps);
    timer(0, this.scrollDuration / this.numScrollSteps)
      .pipe(take(this.numScrollSteps))
      .subscribe((ix: number) => {
        const dx = (step + ((ix === 0) ? rem : 0)) * dir;
        el.scrollLeft += dx;
        this.onScroll.emit(dx);
      });
  }

}
