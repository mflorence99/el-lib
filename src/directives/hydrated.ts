import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HydratorDirective } from './hydrator';
import { Input } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { UUID } from 'angular2-uuid';

/**
 * A directive to mark a component as hydrateable by a hydrator
 */

@Directive({
  selector: '[libHydrated]'
})

export class HydratedDirective implements Hydrateable, OnDestroy, OnInit {

  @Input() libHydrated = UUID.UUID();

  @Output() hydrated = new EventEmitter<boolean>();

  private _hydrated = false;

  /** ctor */
  constructor(public element: ElementRef,
              private hydrator: HydratorDirective) { }

  // property accessors / mutators

  get isHydrated(): boolean {
    return this._hydrated;
  }

  @Input()
  set isHydrated(hydrated: boolean) {
    this.hydrated.emit(hydrated);
    this._hydrated = hydrated;
  }

  // lifecycle methods

  ngOnDestroy(): void {
    this.hydrator.unregisterHydrateable(this);
  }

  ngOnInit(): void {
    this.element.nativeElement.setAttribute('libHydrated', this.libHydrated);
    this.hydrator.registerHydrateable(this);
  }

}

/**
 * Avoid circular dependency with hydrator
 */

export interface Hydrateable {
  element: ElementRef;
  isHydrated: boolean;
  libHydrated: string;
}
