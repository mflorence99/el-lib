import { AfterViewInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { DrawerContainerComponent } from './drawer-container';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';
import { Injector } from '@angular/core';
import { Input } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';

/**
 * lib-drawer-panel component
 *
 * Slidable drawer panel, top, right, bottom, left.
 */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lib-drawer-panel',
  styles: [`
    :host {
      display: block;
      position: absolute;
      transition: transform 0.5s ease-in-out;
      transform: translate(-10000px, -10000px);
      z-index: 100;
    }
  `],
  template: '<ng-content></ng-content>'
})

export class DrawerPanelComponent implements AfterViewInit, OnDestroy, OnInit {

  @Input() position: 'top' | 'right' | 'bottom' | 'left' = 'left';

  @Output() closed = new EventEmitter<any>();
  @Output() opened = new EventEmitter<any>();

  private container: DrawerContainerComponent;
  private context = {};
  private el: HTMLElement;

  /** ctor */
  constructor(private element: ElementRef,
              private injector: Injector) { }

  /** Close drawer */
  close(): void {
    if (this.el) {
      switch (this.position) {
        case 'bottom':
          this.el.style.transform = `translateY(${this.el.offsetHeight}px)`;
        break;
        case 'left':
          this.el.style.transform = `translateX(-${this.el.offsetWidth}px)`;
        break;
        case 'right':
          this.el.style.transform = `translateX(${this.el.offsetWidth}px)`;
        break;
        case 'top':
          this.el.style.transform = `translateY(-${this.el.offsetHeight}px)`;
        break;
      }
      // now report as closed
      this.container.closed(this);
      this.closed.emit(this.context);
      this.context = { };
    }
  }

  /** Open drawer */
  open(context?: any): void {
    if (this.el) {
      switch (this.position) {
        case 'left':
        case 'right':
          this.el.style.transform = `translateX(0px)`;
        break;
        case 'top':
        case 'bottom':
          this.el.style.transform = `translateY(0px)`;
        break;
      }
      // now report as open
      this.context = context || { };
      this.opened.emit(this.context);
      this.container.opened(this);
    }
  }

  // listeners

  @HostListener('window:resize') onResize() {
    this.setup();
  }

  // lifecycle methods

  ngAfterViewInit() {
    this.el = this.element.nativeElement;
    this.setup();
  }

  ngOnDestroy() {
    // don't assume completely initialized
    if (this.container)
      this.container.unregister(this);
  }

  ngOnInit() {
    this.container = this.injector.get(DrawerContainerComponent);
    this.container.register(this);
  }

  // private methods

  private setup () {
    switch (this.position) {
      case 'bottom':
        this.el.style.left = `${(this.el.parentElement.offsetWidth - this.el.offsetWidth) / 2}px`;
        this.el.style.bottom = '0';
        this.el.style.transform = `translateY(${this.el.offsetHeight}px)`;
        break;
      case 'left':
        this.el.style.height = '100%';
        this.el.style.left = '0';
        this.el.style.top = '0';
        this.el.style.transform = `translateX(-${this.el.offsetWidth}px)`;
        break;
      case 'right':
        this.el.style.height = '100%';
        this.el.style.right = '0';
        this.el.style.top = '0';
        this.el.style.transform = `translateX(${this.el.offsetWidth}px)`;
        break;
      case 'top':
        this.el.style.left = `${(this.el.parentElement.offsetWidth - this.el.offsetWidth) / 2}px`;
        this.el.style.top = '0';
        this.el.style.transform = `translateY(-${this.el.offsetHeight}px)`;
        break;
    }
  }

}
