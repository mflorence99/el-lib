import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { DrawerPanelComponent } from './drawer-panel';

/**
 * lib-drawer-container
 *
 * Used to hold lib-drawer-panels
 */

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'lib-drawer-container',
  styles: [`
    :host {
      display: block;
      height: 100%;
      position: relative;
      overflow: hidden;
      width: 100%;
    }

    .drawer-mask {
      background-color: rgba(128, 128, 128, 0.5);
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }

    .masked {
      opacity: 1;
      z-index: 99;
    }
  `],
  template: `
    <ng-content></ng-content>

    <div
      (click)="closeAll()"
      [ngClass]="{'masked': masked}"
      class="drawer-mask">
    </div>`
})

export class DrawerContainerComponent {

  drawers = {
    bottom: null as DrawerPanelComponent,
    left: null as DrawerPanelComponent,
    right: null as DrawerPanelComponent,
    top: null as DrawerPanelComponent
  };

  masked: boolean;

  /** Close all the drawers */
  closeAll() {
    Object.keys(this.drawers).forEach(position => {
      const drawer = this.drawers[position];
      if (drawer)
        drawer.close();
    });
  }

  /** A drawer has been closed */
  closed(drawer: DrawerPanelComponent) {
    this.masked = false;
  }

  /** A drawer has been opened */
  opened(drawer: DrawerPanelComponent) {
    this.masked = true;
  }

}
