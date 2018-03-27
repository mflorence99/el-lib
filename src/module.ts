import { ModuleWithProviders, NgModule } from '@angular/core';

import { AnimatedRouterOutletComponent } from './components/animated-router-outlet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DrawerContainerComponent } from './components/drawer-container';
import { DrawerPanelComponent } from './components/drawer-panel';
import { EllipsizePipe } from './pipes/ellipsize';

/**
 * el-lib module definition
 */

const COMPONENTS = [
  AnimatedRouterOutletComponent,
  DrawerContainerComponent,
  DrawerPanelComponent
];

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule
];

const PIPES = [
  EllipsizePipe
];

const SERVICES = [ ];

@NgModule({

  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],

  exports: [
    ...COMPONENTS,
    ...PIPES
  ],

  imports: [
    ...MODULES,
  ]

})

export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
