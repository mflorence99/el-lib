import { AnimatedRouterOutletComponent } from './components/animated-router-outlet';
import { BreakablePipe } from './pipes/breakable';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './pipes/dateformat';
import { DrawerContainerComponent } from './components/drawer-container';
import { DrawerPanelComponent } from './components/drawer-panel';
import { DurationPipe } from './pipes/duration';
import { EllipsizePipe } from './pipes/ellipsize';
import { FromUnixTimePipe } from './pipes/fromunixtime';
import { HTMLifyPipe } from './pipes/htmlify';
import { HydratedDirective } from './directives/hydrated';
import { HydratorDirective } from './directives/hydrator';
import { MarkdownComponent } from './components/markdown';
import { MarkdownPipe } from './pipes/markdown';
import { NgModule } from '@angular/core';
import { NumeralPipe } from './pipes/numeral';
import { ResizedDirective } from './directives/resized';
import { RxfSubmitDirective } from './directives/rxf-submit';
import { TimeAgoPipe } from './pipes/timeago';
import { UTCFormatPipe } from './pipes/utcformat';

/**
 * el-lib module definition
 */

const COMPONENTS = [
  AnimatedRouterOutletComponent,
  DrawerContainerComponent,
  DrawerPanelComponent,
  MarkdownComponent
];

const DIRECTIVES = [
  HydratedDirective,
  HydratorDirective,
  ResizedDirective,
  RxfSubmitDirective
];

const MODULES = [
  CommonModule
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

@NgModule({

  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],

  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],

  imports: [
    ...MODULES,
  ]

})

export class LibModule { }
