import { NgModule } from '@angular/core';
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
var COMPONENTS = [
    AnimatedRouterOutletComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQU1sRCxJQUFNLFVBQVUsR0FBRztJQUNqQiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLG9CQUFvQjtDQUNyQixDQUFDO0FBRUYsSUFBTSxPQUFPLEdBQUc7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7Q0FDYixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUc7SUFDWixhQUFhO0NBQ2QsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHLEVBQUcsQ0FBQzs7OztJQXFCWixpQkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUNKLFFBQVEsUUFDWjtTQUNGLENBQUM7S0FDSDs7Z0JBMUJGLFFBQVEsU0FBQztvQkFFUixZQUFZLEVBQ1AsVUFBVSxRQUNWLEtBQUssQ0FDVDtvQkFFRCxPQUFPLEVBQ0YsVUFBVSxRQUNWLEtBQUssQ0FDVDtvQkFFRCxPQUFPLEVBQ0YsT0FBTyxRQUNYO2lCQUVGOzs7O29CQWhERDs7U0FrRGEsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuaW1hdGVkUm91dGVyT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FuaW1hdGVkLXJvdXRlci1vdXRsZXQnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERyYXdlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kcmF3ZXItY29udGFpbmVyJztcbmltcG9ydCB7IERyYXdlclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RyYXdlci1wYW5lbCc7XG5pbXBvcnQgeyBFbGxpcHNpemVQaXBlIH0gZnJvbSAnLi9waXBlcy9lbGxpcHNpemUnO1xuXG4vKipcbiAqIGVsLWxpYiBtb2R1bGUgZGVmaW5pdGlvblxuICovXG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIEFuaW1hdGVkUm91dGVyT3V0bGV0Q29tcG9uZW50LFxuICBEcmF3ZXJDb250YWluZXJDb21wb25lbnQsXG4gIERyYXdlclBhbmVsQ29tcG9uZW50XG5dO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBCcm93c2VyTW9kdWxlLFxuICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgQ29tbW9uTW9kdWxlXG5dO1xuXG5jb25zdCBQSVBFUyA9IFtcbiAgRWxsaXBzaXplUGlwZVxuXTtcblxuY29uc3QgU0VSVklDRVMgPSBbIF07XG5cbkBOZ01vZHVsZSh7XG5cbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uQ09NUE9ORU5UUyxcbiAgICAuLi5QSVBFU1xuICBdLFxuXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5DT01QT05FTlRTLFxuICAgIC4uLlBJUEVTXG4gIF0sXG5cbiAgaW1wb3J0czogW1xuICAgIC4uLk1PRFVMRVMsXG4gIF1cblxufSlcblxuZXhwb3J0IGNsYXNzIExpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlNFUlZJQ0VTXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19