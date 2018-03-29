import { NgModule } from '@angular/core';
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
var COMPONENTS = [
    AnimatedRouterOutletComponent,
    DrawerContainerComponent,
    DrawerPanelComponent,
    LifecycleComponent,
    MarkdownComponent
];
var MODULES = [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule
];
var PIPES = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQU1sRCxJQUFNLFVBQVUsR0FBRztJQUNqQiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ2xCLENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7Q0FDYixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUc7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0NBQ2QsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHLEVBQUcsQ0FBQzs7OztJQXFCWixpQkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUNKLFFBQVEsUUFDWjtTQUNGLENBQUM7S0FDSDs7Z0JBMUJGLFFBQVEsU0FBQztvQkFFUixZQUFZLEVBQ1AsVUFBVSxRQUNWLEtBQUssQ0FDVDtvQkFFRCxPQUFPLEVBQ0YsVUFBVSxRQUNWLEtBQUssQ0FDVDtvQkFFRCxPQUFPLEVBQ0YsT0FBTyxRQUNYO2lCQUVGOzs7O29CQXhFRDs7U0EwRWEsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuaW1hdGVkUm91dGVyT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FuaW1hdGVkLXJvdXRlci1vdXRsZXQnO1xuaW1wb3J0IHsgQnJlYWthYmxlUGlwZSB9IGZyb20gJy4vcGlwZXMvYnJlYWthYmxlJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRlRm9ybWF0UGlwZSB9IGZyb20gJy4vcGlwZXMvZGF0ZWZvcm1hdCc7XG5pbXBvcnQgeyBEcmF3ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJhd2VyLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBEcmF3ZXJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kcmF3ZXItcGFuZWwnO1xuaW1wb3J0IHsgRHVyYXRpb25QaXBlIH0gZnJvbSAnLi9waXBlcy9kdXJhdGlvbic7XG5pbXBvcnQgeyBFbGxpcHNpemVQaXBlIH0gZnJvbSAnLi9waXBlcy9lbGxpcHNpemUnO1xuaW1wb3J0IHsgRnJvbVVuaXhUaW1lUGlwZSB9IGZyb20gJy4vcGlwZXMvZnJvbXVuaXh0aW1lJztcbmltcG9ydCB7IEhUTUxpZnlQaXBlIH0gZnJvbSAnLi9waXBlcy9odG1saWZ5JztcbmltcG9ydCB7IExpZmVjeWNsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saWZlY3ljbGUnO1xuaW1wb3J0IHsgTWFya2Rvd25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFya2Rvd24nO1xuaW1wb3J0IHsgTWFya2Rvd25QaXBlIH0gZnJvbSAnLi9waXBlcy9tYXJrZG93bic7XG5pbXBvcnQgeyBOdW1lcmFsUGlwZSB9IGZyb20gJy4vcGlwZXMvbnVtZXJhbCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGltZUFnb1BpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWVhZ28nO1xuaW1wb3J0IHsgVVRDRm9ybWF0UGlwZSB9IGZyb20gJy4vcGlwZXMvdXRjZm9ybWF0JztcblxuLyoqXG4gKiBlbC1saWIgbW9kdWxlIGRlZmluaXRpb25cbiAqL1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBBbmltYXRlZFJvdXRlck91dGxldENvbXBvbmVudCxcbiAgRHJhd2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICBEcmF3ZXJQYW5lbENvbXBvbmVudCxcbiAgTGlmZWN5Y2xlQ29tcG9uZW50LFxuICBNYXJrZG93bkNvbXBvbmVudFxuXTtcblxuY29uc3QgTU9EVUxFUyA9IFtcbiAgQnJvd3Nlck1vZHVsZSxcbiAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gIENvbW1vbk1vZHVsZSxcbiAgUm91dGVyTW9kdWxlXG5dO1xuXG5jb25zdCBQSVBFUyA9IFtcbiAgQnJlYWthYmxlUGlwZSxcbiAgRGF0ZUZvcm1hdFBpcGUsXG4gIER1cmF0aW9uUGlwZSxcbiAgRWxsaXBzaXplUGlwZSxcbiAgRnJvbVVuaXhUaW1lUGlwZSxcbiAgSFRNTGlmeVBpcGUsXG4gIE1hcmtkb3duUGlwZSxcbiAgTnVtZXJhbFBpcGUsXG4gIFRpbWVBZ29QaXBlLFxuICBVVENGb3JtYXRQaXBlXG5dO1xuXG5jb25zdCBTRVJWSUNFUyA9IFsgXTtcblxuQE5nTW9kdWxlKHtcblxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DT01QT05FTlRTLFxuICAgIC4uLlBJUEVTXG4gIF0sXG5cbiAgZXhwb3J0czogW1xuICAgIC4uLkNPTVBPTkVOVFMsXG4gICAgLi4uUElQRVNcbiAgXSxcblxuICBpbXBvcnRzOiBbXG4gICAgLi4uTU9EVUxFUyxcbiAgXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMaWJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uU0VSVklDRVNcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=