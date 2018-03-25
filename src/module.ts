import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DrawerContainerComponent } from './components/drawer-container';
import { DrawerPanelComponent } from './components/drawer-panel';
import { EllipsizePipe } from './pipes/ellipsize';
import { RouterModule } from '@angular/router';

/**
 * el-lib module definition
 */

const COMPONENTS = [
  DrawerContainerComponent,
  DrawerPanelComponent
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
    ...PIPES,
    CommonModule,
    RouterModule
  ],

  imports: [
    CommonModule,
    RouterModule
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
