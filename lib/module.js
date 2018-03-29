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
import { MarkdownComponent } from './components/markdown';
import { MarkdownPipe } from './pipes/markdown';
import { NumeralPipe } from './pipes/numeral';
import { RouterModule } from '@angular/router';
import { RxfSubmitDirective } from './directives/rxf-submit';
import { TimeAgoPipe } from './pipes/timeago';
import { UTCFormatPipe } from './pipes/utcformat';
/**
 * el-lib module definition
 */
var COMPONENTS = [
    AnimatedRouterOutletComponent,
    DrawerContainerComponent,
    DrawerPanelComponent,
    MarkdownComponent
];
var DIRECTIVES = [
    RxfSubmitDirective
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
                    declarations: COMPONENTS.concat(DIRECTIVES, PIPES),
                    exports: COMPONENTS.concat(DIRECTIVES, PIPES),
                    imports: MODULES.slice()
                },] },
    ];
    /** @nocollapse */
    LibModule.ctorParameters = function () { return []; };
    return LibModule;
}());
export { LibModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQU1sRCxJQUFNLFVBQVUsR0FBRztJQUNqQiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDbEIsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHO0lBQ2pCLGtCQUFrQjtDQUNuQixDQUFDO0FBRUYsSUFBTSxPQUFPLEdBQUc7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQztBQUVGLElBQU0sS0FBSyxHQUFHO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtDQUNkLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRyxFQUFHLENBQUM7Ozs7SUF1QlosaUJBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFDSixRQUFRLFFBQ1o7U0FDRixDQUFDO0tBQ0g7O2dCQTVCRixRQUFRLFNBQUM7b0JBRVIsWUFBWSxFQUNQLFVBQVUsUUFDVixVQUFVLEVBQ1YsS0FBSyxDQUNUO29CQUVELE9BQU8sRUFDRixVQUFVLFFBQ1YsVUFBVSxFQUNWLEtBQUssQ0FDVDtvQkFFRCxPQUFPLEVBQ0YsT0FBTyxRQUNYO2lCQUVGOzs7O29CQTdFRDs7U0ErRWEsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuaW1hdGVkUm91dGVyT3V0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FuaW1hdGVkLXJvdXRlci1vdXRsZXQnO1xuaW1wb3J0IHsgQnJlYWthYmxlUGlwZSB9IGZyb20gJy4vcGlwZXMvYnJlYWthYmxlJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXRlRm9ybWF0UGlwZSB9IGZyb20gJy4vcGlwZXMvZGF0ZWZvcm1hdCc7XG5pbXBvcnQgeyBEcmF3ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJhd2VyLWNvbnRhaW5lcic7XG5pbXBvcnQgeyBEcmF3ZXJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kcmF3ZXItcGFuZWwnO1xuaW1wb3J0IHsgRHVyYXRpb25QaXBlIH0gZnJvbSAnLi9waXBlcy9kdXJhdGlvbic7XG5pbXBvcnQgeyBFbGxpcHNpemVQaXBlIH0gZnJvbSAnLi9waXBlcy9lbGxpcHNpemUnO1xuaW1wb3J0IHsgRnJvbVVuaXhUaW1lUGlwZSB9IGZyb20gJy4vcGlwZXMvZnJvbXVuaXh0aW1lJztcbmltcG9ydCB7IEhUTUxpZnlQaXBlIH0gZnJvbSAnLi9waXBlcy9odG1saWZ5JztcbmltcG9ydCB7IE1hcmtkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21hcmtkb3duJztcbmltcG9ydCB7IE1hcmtkb3duUGlwZSB9IGZyb20gJy4vcGlwZXMvbWFya2Rvd24nO1xuaW1wb3J0IHsgTnVtZXJhbFBpcGUgfSBmcm9tICcuL3BpcGVzL251bWVyYWwnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJ4ZlN1Ym1pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yeGYtc3VibWl0JztcbmltcG9ydCB7IFRpbWVBZ29QaXBlIH0gZnJvbSAnLi9waXBlcy90aW1lYWdvJztcbmltcG9ydCB7IFVUQ0Zvcm1hdFBpcGUgfSBmcm9tICcuL3BpcGVzL3V0Y2Zvcm1hdCc7XG5cbi8qKlxuICogZWwtbGliIG1vZHVsZSBkZWZpbml0aW9uXG4gKi9cblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgQW5pbWF0ZWRSb3V0ZXJPdXRsZXRDb21wb25lbnQsXG4gIERyYXdlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgRHJhd2VyUGFuZWxDb21wb25lbnQsXG4gIE1hcmtkb3duQ29tcG9uZW50XG5dO1xuXG5jb25zdCBESVJFQ1RJVkVTID0gW1xuICBSeGZTdWJtaXREaXJlY3RpdmVcbl07XG5cbmNvbnN0IE1PRFVMRVMgPSBbXG4gIEJyb3dzZXJNb2R1bGUsXG4gIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICBDb21tb25Nb2R1bGUsXG4gIFJvdXRlck1vZHVsZVxuXTtcblxuY29uc3QgUElQRVMgPSBbXG4gIEJyZWFrYWJsZVBpcGUsXG4gIERhdGVGb3JtYXRQaXBlLFxuICBEdXJhdGlvblBpcGUsXG4gIEVsbGlwc2l6ZVBpcGUsXG4gIEZyb21Vbml4VGltZVBpcGUsXG4gIEhUTUxpZnlQaXBlLFxuICBNYXJrZG93blBpcGUsXG4gIE51bWVyYWxQaXBlLFxuICBUaW1lQWdvUGlwZSxcbiAgVVRDRm9ybWF0UGlwZVxuXTtcblxuY29uc3QgU0VSVklDRVMgPSBbIF07XG5cbkBOZ01vZHVsZSh7XG5cbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uQ09NUE9ORU5UUyxcbiAgICAuLi5ESVJFQ1RJVkVTLFxuICAgIC4uLlBJUEVTXG4gIF0sXG5cbiAgZXhwb3J0czogW1xuICAgIC4uLkNPTVBPTkVOVFMsXG4gICAgLi4uRElSRUNUSVZFUyxcbiAgICAuLi5QSVBFU1xuICBdLFxuXG4gIGltcG9ydHM6IFtcbiAgICAuLi5NT0RVTEVTLFxuICBdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaWJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IExpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5TRVJWSUNFU1xuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==