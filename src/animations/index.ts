import { AnimationTriggerMetadata } from '@angular/animations';

import { animate } from '@angular/animations';
import { group } from '@angular/animations';
import { query } from '@angular/animations';
import { state } from '@angular/animations';
import { style } from '@angular/animations';
import { transition } from '@angular/animations';
import { trigger } from '@angular/animations';

/**
 * Common animation functions
 */

export function inOutAnimation(): AnimationTriggerMetadata {
  return trigger('inOut', [
    transition('* => *', [
      group([
        query(':enter', [
          style({opacity: 0}),
          animate('0.33s ease-in-out', style({opacity: 1}))
        ], {optional: true, limit: 1}),
        query(':leave', [
          animate('0.33s ease-in-out', style({opacity: 0}))
        ], {optional: true, limit: 1})
      ])
    ])
  ]);
}

export function showHideAnimation(): AnimationTriggerMetadata {
  return trigger('showHide', [
    state('shown', style({height: '*', opacity: 1})),
    state('hidden', style({height: 0, opacity: 0})),
    transition('* => *', animate('0.25s ease-in-out'))
  ]);
}
