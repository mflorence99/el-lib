import { ModuleWithProviders, NgModule } from '@angular/core';

import { AnimatedRouterOutletComponent } from './components/animated-router-outlet';
import { BreakablePipe } from './pipes/breakable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './pipes/dateformat';
import { DrawerContainerComponent } from './components/drawer-container';
import { DrawerPanelComponent } from './components/drawer-panel';
import { DurationPipe } from './pipes/duration';
import { EllipsizePipe } from './pipes/ellipsize';
import { FromUnixTimePipe } from './pipes/fromunixtime';
import { HTMLifyPipe } from './pipes/htmlify';
import { LifecycleComponent } from './components/lifecycle';
import { MarkdownComponent } from './components/markdown';
import { MarkdownPipe } from './pipes/markdown';
import { NumeralPipe } from './pipes/numeral';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from './pipes/timeago';
import { UTCFormatPipe } from './pipes/utcformat';

/**
 * el-lib module definition
 */

const COMPONENTS = [
  AnimatedRouterOutletComponent,
  DrawerContainerComponent,
  DrawerPanelComponent,
  LifecycleComponent,
  MarkdownComponent
];

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
  RouterModule
];

const PIPES = [
  BreakablePipe,
  DateFormatPipe,
  DurationPipe,
  EllipsizePipe,
  FromUnixTimePipe,
  HTMLifyPipe,
  MarkdownPipe,
  NumeralPipe,
  TimeAgoPipe,
  UTCFormatPipe
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
