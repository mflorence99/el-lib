import { ChangeDetectorRef } from '@angular/core';
import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HydratorDirective } from './hydrator';
import { Input } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { ViewContainerRef } from '@angular/core';

/**
 * A directive to mark a component as hydrateable by a hydrator
 */

@Directive({
  selector: '[libHydrated]'
})

export class HydratedDirective implements Hydrateable, OnDestroy, OnInit {

  @Input() libHydrated = UUID.UUID();

  private hydrated = false;

  /** ctor */
  constructor(private cdf: ChangeDetectorRef,
              public element: ElementRef,
              private hydrator: HydratorDirective,
              private vcf: ViewContainerRef) { }

  // property accessors / mutators

  get isHydrated(): boolean {
    return this.hydrated;
  }

  @Input()
  set isHydrated(hydrated: boolean) {
    // https://github.com/angular/angular/issues/8277
    const component = (<any>this.vcf)._data.componentView.component;
    component.hydrated = this.hydrated = hydrated;
    this.cdf.detectChanges();
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
