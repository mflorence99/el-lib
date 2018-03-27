import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

import { routeAnimation } from '../animations';

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
