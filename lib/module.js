import { NgModule } from '@angular/core';
import { AnimatedRouterOutletComponent } from './components/animated-router-outlet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DrawerContainerComponent } from './components/drawer-container';
import { DrawerPanelComponent } from './components/drawer-panel';
import { EllipsizePipe } from './pipes/ellipsize';
import { RouterModule } from '@angular/router';
/**
 * el-lib module definition
 */
var COMPONENTS = [
    AnimatedRouterOutletComponent,
    DrawerContainerComponent,
    DrawerPanelComponent
];
var MODULES = [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule
];
var PIPES = [
    EllipsizePipe
];
var SERVICES = [];
var LibModule = /** @class */ (function () {
    function LibModule() {
    }
    LibModule.forRoot = function () {
        return {
            ngModule: LibModule,
            providers: SERVICES.slice()
        };
    };
    LibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: COMPONENTS.concat(PIPES),
                    exports: COMPONENTS.concat(PIPES),
                    imports: MODULES.slice()
                },] },
    ];
    /** @nocollapse */
    LibModule.ctorParameters = function () { return []; };
    return LibModule;
}());
export { LibModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFNL0MsSUFBTSxVQUFVLEdBQUc7SUFDakIsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDckIsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtDQUNiLENBQUM7QUFFRixJQUFNLEtBQUssR0FBRztJQUNaLGFBQWE7Q0FDZCxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUcsRUFBRyxDQUFDOzs7O0lBcUJaLGlCQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQ0osUUFBUSxRQUNaO1NBQ0YsQ0FBQztLQUNIOztnQkExQkYsUUFBUSxTQUFDO29CQUVSLFlBQVksRUFDUCxVQUFVLFFBQ1YsS0FBSyxDQUNUO29CQUVELE9BQU8sRUFDRixVQUFVLFFBQ1YsS0FBSyxDQUNUO29CQUVELE9BQU8sRUFDRixPQUFPLFFBQ1g7aUJBRUY7Ozs7b0JBbEREOztTQW9EYSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5pbWF0ZWRSb3V0ZXJPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYW5pbWF0ZWQtcm91dGVyLW91dGxldCc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHJhd2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RyYXdlci1jb250YWluZXInO1xuaW1wb3J0IHsgRHJhd2VyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJhd2VyLXBhbmVsJztcbmltcG9ydCB7IEVsbGlwc2l6ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2VsbGlwc2l6ZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIGVsLWxpYiBtb2R1bGUgZGVmaW5pdGlvblxuICovXG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIEFuaW1hdGVkUm91dGVyT3V0bGV0Q29tcG9uZW50LFxuICBEcmF3ZXJDb250YWluZXJDb21wb25lbnQsXG4gIERyYXdlclBhbmVsQ29tcG9uZW50XG5dO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBCcm93c2VyTW9kdWxlLFxuICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgQ29tbW9uTW9kdWxlLFxuICBSb3V0ZXJNb2R1bGVcbl07XG5cbmNvbnN0IFBJUEVTID0gW1xuICBFbGxpcHNpemVQaXBlXG5dO1xuXG5jb25zdCBTRVJWSUNFUyA9IFsgXTtcblxuQE5nTW9kdWxlKHtcblxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DT01QT05FTlRTLFxuICAgIC4uLlBJUEVTXG4gIF0sXG5cbiAgZXhwb3J0czogW1xuICAgIC4uLkNPTVBPTkVOVFMsXG4gICAgLi4uUElQRVNcbiAgXSxcblxuICBpbXBvcnRzOiBbXG4gICAgLi4uTU9EVUxFUyxcbiAgXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uU0VSVklDRVNcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=