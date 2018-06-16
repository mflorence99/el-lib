import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { HostBinding } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { filter } from 'rxjs/operators';
import { routeAnimation } from '../animations';
import { tap } from 'rxjs/operators';

/**
 * Animate a router outlet
 */

@Component({
  animations: [routeAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lib-animated-router-outlet',
  styles: [`
    :host {
      display: block;
      position: relative;
    }
  `],
  template: '<router-outlet></router-outlet>'
})

export class AnimatedRouterOutletComponent implements OnInit {

  url: string;

  @HostBinding('@routeAnimation') get trigger() {
    return this.url;
  }

  /** ctor */
  constructor(private router: Router) { }

  // lifecycle methods

  ngOnInit() {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => this.url = event.url)
      ).subscribe();
  }

}
