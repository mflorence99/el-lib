import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';

import { animate } from '@angular/animations';
import { group } from '@angular/animations';
import { query } from '@angular/animations';
import { style } from '@angular/animations';
import { transition } from '@angular/animations';
import { trigger } from '@angular/animations';

/**
 * Left, right animations
 */

const IN_POSITION = {
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
  'z-index': -1
};

const OFF_SCREEN = {
  'background-color': 'var(--background-color)',
  width: '100%'
};

const ANIM_LEFT = [
  group([
    query(':enter', [
      style({ ...OFF_SCREEN, transform: 'translateX(100%)' }),
      animate('0.33s ease-in-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true, limit: 1 }),
    query(':leave', [
      style(IN_POSITION),
      animate('0.33s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ], { optional: true, limit: 1 })
  ])
];

const ANIM_RIGHT = [
  group([
    query(':enter', [
      style({ ...OFF_SCREEN, transform: 'translateX(-100%)' }),
      animate('0.33s ease-in-out', style({ transform: 'translateX(0%)' }))
    ], { optional: true, limit: 1 }),
    query(':leave', [
      style(IN_POSITION),
      animate('0.33s ease-in-out', style({ transform: 'translateX(100%)' }))
    ], { optional: true, limit: 1 })
  ])
];

/**
 * Animate a router outlet
 */

@Component({
  animations: [
    trigger('routeAnimation', [
      transition(':decrement', ANIM_LEFT),
      transition(':increment', ANIM_RIGHT)
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lib-animated-router-outlet',
  styles: [`
    :host {
      display: block;
      position: relative;
    }
  `],
  template: '<router-outlet (activate)="onActivate($event)"></router-outlet>'
})

export class AnimatedRouterOutletComponent {

  routeIdx: number;

  @HostBinding('@routeAnimation') get trigger() {
    return this.routeIdx;
  }

  /** ctor */
  constructor(private route: ActivatedRoute) { }

  // event handlers

  onActivate(event): void {
    // find leaf route
    let route = this.route.firstChild;
    while (route) {
      if (route.firstChild)
        route = route.firstChild;
      else break;
    }
    // extract route index
    if (route)
      this.routeIdx = route.snapshot.data.routeIdx;
    // if there's no index, we'll only slide one way
    if (!this.routeIdx)
      this.routeIdx = 0;
  }

}
