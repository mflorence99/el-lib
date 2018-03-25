import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DrawerContainerComponent } from './components/drawer-container';
import { DrawerPanelComponent } from './components/drawer-panel';
import { EllipsizePipe } from './pipes/ellipsize';
/**
 * el-lib module definition
 */
var COMPONENTS = [
    DrawerContainerComponent,
    DrawerPanelComponent
];
var MODULES = [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQU1sRCxJQUFNLFVBQVUsR0FBRztJQUNqQix3QkFBd0I7SUFDeEIsb0JBQW9CO0NBQ3JCLENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtDQUNiLENBQUM7QUFFRixJQUFNLEtBQUssR0FBRztJQUNaLGFBQWE7Q0FDZCxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUcsRUFBRyxDQUFDOzs7O0lBcUJaLGlCQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQ0osUUFBUSxRQUNaO1NBQ0YsQ0FBQztLQUNIOztnQkExQkYsUUFBUSxTQUFDO29CQUVSLFlBQVksRUFDUCxVQUFVLFFBQ1YsS0FBSyxDQUNUO29CQUVELE9BQU8sRUFDRixVQUFVLFFBQ1YsS0FBSyxDQUNUO29CQUVELE9BQU8sRUFDRixPQUFPLFFBQ1g7aUJBRUY7Ozs7b0JBOUNEOztTQWdEYSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERyYXdlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kcmF3ZXItY29udGFpbmVyJztcbmltcG9ydCB7IERyYXdlclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RyYXdlci1wYW5lbCc7XG5pbXBvcnQgeyBFbGxpcHNpemVQaXBlIH0gZnJvbSAnLi9waXBlcy9lbGxpcHNpemUnO1xuXG4vKipcbiAqIGVsLWxpYiBtb2R1bGUgZGVmaW5pdGlvblxuICovXG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIERyYXdlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgRHJhd2VyUGFuZWxDb21wb25lbnRcbl07XG5cbmNvbnN0IE1PRFVMRVMgPSBbXG4gIEJyb3dzZXJNb2R1bGUsXG4gIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICBDb21tb25Nb2R1bGVcbl07XG5cbmNvbnN0IFBJUEVTID0gW1xuICBFbGxpcHNpemVQaXBlXG5dO1xuXG5jb25zdCBTRVJWSUNFUyA9IFsgXTtcblxuQE5nTW9kdWxlKHtcblxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DT01QT05FTlRTLFxuICAgIC4uLlBJUEVTXG4gIF0sXG5cbiAgZXhwb3J0czogW1xuICAgIC4uLkNPTVBPTkVOVFMsXG4gICAgLi4uUElQRVNcbiAgXSxcblxuICBpbXBvcnRzOiBbXG4gICAgLi4uTU9EVUxFUyxcbiAgXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uU0VSVklDRVNcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=