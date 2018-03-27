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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQU1sRCxJQUFNLFVBQVUsR0FBRztJQUNqQiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDbEIsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtDQUNiLENBQUM7QUFFRixJQUFNLEtBQUssR0FBRztJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7Q0FDZCxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUcsRUFBRyxDQUFDOzs7O0lBcUJaLGlCQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQ0osUUFBUSxRQUNaO1NBQ0YsQ0FBQztLQUNIOztnQkExQkYsUUFBUSxTQUFDO29CQUVSLFlBQVksRUFDUCxVQUFVLFFBQ1YsS0FBSyxDQUNUO29CQUVELE9BQU8sRUFDRixVQUFVLFFBQ1YsS0FBSyxDQUNUO29CQUVELE9BQU8sRUFDRixPQUFPLFFBQ1g7aUJBRUY7Ozs7b0JBdEVEOztTQXdFYSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5pbWF0ZWRSb3V0ZXJPdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYW5pbWF0ZWQtcm91dGVyLW91dGxldCc7XG5pbXBvcnQgeyBCcmVha2FibGVQaXBlIH0gZnJvbSAnLi9waXBlcy9icmVha2FibGUnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhdGVGb3JtYXRQaXBlIH0gZnJvbSAnLi9waXBlcy9kYXRlZm9ybWF0JztcbmltcG9ydCB7IERyYXdlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kcmF3ZXItY29udGFpbmVyJztcbmltcG9ydCB7IERyYXdlclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RyYXdlci1wYW5lbCc7XG5pbXBvcnQgeyBEdXJhdGlvblBpcGUgfSBmcm9tICcuL3BpcGVzL2R1cmF0aW9uJztcbmltcG9ydCB7IEVsbGlwc2l6ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2VsbGlwc2l6ZSc7XG5pbXBvcnQgeyBGcm9tVW5peFRpbWVQaXBlIH0gZnJvbSAnLi9waXBlcy9mcm9tdW5peHRpbWUnO1xuaW1wb3J0IHsgSFRNTGlmeVBpcGUgfSBmcm9tICcuL3BpcGVzL2h0bWxpZnknO1xuaW1wb3J0IHsgTWFya2Rvd25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFya2Rvd24nO1xuaW1wb3J0IHsgTWFya2Rvd25QaXBlIH0gZnJvbSAnLi9waXBlcy9tYXJrZG93bic7XG5pbXBvcnQgeyBOdW1lcmFsUGlwZSB9IGZyb20gJy4vcGlwZXMvbnVtZXJhbCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGltZUFnb1BpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWVhZ28nO1xuaW1wb3J0IHsgVVRDRm9ybWF0UGlwZSB9IGZyb20gJy4vcGlwZXMvdXRjZm9ybWF0JztcblxuLyoqXG4gKiBlbC1saWIgbW9kdWxlIGRlZmluaXRpb25cbiAqL1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBBbmltYXRlZFJvdXRlck91dGxldENvbXBvbmVudCxcbiAgRHJhd2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICBEcmF3ZXJQYW5lbENvbXBvbmVudCxcbiAgTWFya2Rvd25Db21wb25lbnRcbl07XG5cbmNvbnN0IE1PRFVMRVMgPSBbXG4gIEJyb3dzZXJNb2R1bGUsXG4gIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICBDb21tb25Nb2R1bGUsXG4gIFJvdXRlck1vZHVsZVxuXTtcblxuY29uc3QgUElQRVMgPSBbXG4gIEJyZWFrYWJsZVBpcGUsXG4gIERhdGVGb3JtYXRQaXBlLFxuICBEdXJhdGlvblBpcGUsXG4gIEVsbGlwc2l6ZVBpcGUsXG4gIEZyb21Vbml4VGltZVBpcGUsXG4gIEhUTUxpZnlQaXBlLFxuICBNYXJrZG93blBpcGUsXG4gIE51bWVyYWxQaXBlLFxuICBUaW1lQWdvUGlwZSxcbiAgVVRDRm9ybWF0UGlwZVxuXTtcblxuY29uc3QgU0VSVklDRVMgPSBbIF07XG5cbkBOZ01vZHVsZSh7XG5cbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uQ09NUE9ORU5UUyxcbiAgICAuLi5QSVBFU1xuICBdLFxuXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5DT01QT05FTlRTLFxuICAgIC4uLlBJUEVTXG4gIF0sXG5cbiAgaW1wb3J0czogW1xuICAgIC4uLk1PRFVMRVMsXG4gIF1cblxufSlcblxuZXhwb3J0IGNsYXNzIExpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlNFUlZJQ0VTXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19