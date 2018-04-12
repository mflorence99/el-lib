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
import { ResizedDirective } from './directives/resized';
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
    ResizedDirective,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQU1sRCxJQUFNLFVBQVUsR0FBRztJQUNqQiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDbEIsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDbkIsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtDQUNiLENBQUM7QUFFRixJQUFNLEtBQUssR0FBRztJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7Q0FDZCxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUcsRUFBRyxDQUFDOzs7O0lBdUJaLGlCQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQ0osUUFBUSxRQUNaO1NBQ0YsQ0FBQztLQUNIOztnQkE1QkYsUUFBUSxTQUFDO29CQUVSLFlBQVksRUFDUCxVQUFVLFFBQ1YsVUFBVSxFQUNWLEtBQUssQ0FDVDtvQkFFRCxPQUFPLEVBQ0YsVUFBVSxRQUNWLFVBQVUsRUFDVixLQUFLLENBQ1Q7b0JBRUQsT0FBTyxFQUNGLE9BQU8sUUFDWDtpQkFFRjs7OztvQkEvRUQ7O1NBaUZhLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbmltYXRlZFJvdXRlck91dGxldENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbmltYXRlZC1yb3V0ZXItb3V0bGV0JztcbmltcG9ydCB7IEJyZWFrYWJsZVBpcGUgfSBmcm9tICcuL3BpcGVzL2JyZWFrYWJsZSc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGF0ZUZvcm1hdFBpcGUgfSBmcm9tICcuL3BpcGVzL2RhdGVmb3JtYXQnO1xuaW1wb3J0IHsgRHJhd2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RyYXdlci1jb250YWluZXInO1xuaW1wb3J0IHsgRHJhd2VyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJhd2VyLXBhbmVsJztcbmltcG9ydCB7IER1cmF0aW9uUGlwZSB9IGZyb20gJy4vcGlwZXMvZHVyYXRpb24nO1xuaW1wb3J0IHsgRWxsaXBzaXplUGlwZSB9IGZyb20gJy4vcGlwZXMvZWxsaXBzaXplJztcbmltcG9ydCB7IEZyb21Vbml4VGltZVBpcGUgfSBmcm9tICcuL3BpcGVzL2Zyb211bml4dGltZSc7XG5pbXBvcnQgeyBIVE1MaWZ5UGlwZSB9IGZyb20gJy4vcGlwZXMvaHRtbGlmeSc7XG5pbXBvcnQgeyBNYXJrZG93bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tYXJrZG93bic7XG5pbXBvcnQgeyBNYXJrZG93blBpcGUgfSBmcm9tICcuL3BpcGVzL21hcmtkb3duJztcbmltcG9ydCB7IE51bWVyYWxQaXBlIH0gZnJvbSAnLi9waXBlcy9udW1lcmFsJztcbmltcG9ydCB7IFJlc2l6ZWREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvcmVzaXplZCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUnhmU3VibWl0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3J4Zi1zdWJtaXQnO1xuaW1wb3J0IHsgVGltZUFnb1BpcGUgfSBmcm9tICcuL3BpcGVzL3RpbWVhZ28nO1xuaW1wb3J0IHsgVVRDRm9ybWF0UGlwZSB9IGZyb20gJy4vcGlwZXMvdXRjZm9ybWF0JztcblxuLyoqXG4gKiBlbC1saWIgbW9kdWxlIGRlZmluaXRpb25cbiAqL1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBBbmltYXRlZFJvdXRlck91dGxldENvbXBvbmVudCxcbiAgRHJhd2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICBEcmF3ZXJQYW5lbENvbXBvbmVudCxcbiAgTWFya2Rvd25Db21wb25lbnRcbl07XG5cbmNvbnN0IERJUkVDVElWRVMgPSBbXG4gIFJlc2l6ZWREaXJlY3RpdmUsXG4gIFJ4ZlN1Ym1pdERpcmVjdGl2ZVxuXTtcblxuY29uc3QgTU9EVUxFUyA9IFtcbiAgQnJvd3Nlck1vZHVsZSxcbiAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gIENvbW1vbk1vZHVsZSxcbiAgUm91dGVyTW9kdWxlXG5dO1xuXG5jb25zdCBQSVBFUyA9IFtcbiAgQnJlYWthYmxlUGlwZSxcbiAgRGF0ZUZvcm1hdFBpcGUsXG4gIER1cmF0aW9uUGlwZSxcbiAgRWxsaXBzaXplUGlwZSxcbiAgRnJvbVVuaXhUaW1lUGlwZSxcbiAgSFRNTGlmeVBpcGUsXG4gIE1hcmtkb3duUGlwZSxcbiAgTnVtZXJhbFBpcGUsXG4gIFRpbWVBZ29QaXBlLFxuICBVVENGb3JtYXRQaXBlXG5dO1xuXG5jb25zdCBTRVJWSUNFUyA9IFsgXTtcblxuQE5nTW9kdWxlKHtcblxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DT01QT05FTlRTLFxuICAgIC4uLkRJUkVDVElWRVMsXG4gICAgLi4uUElQRVNcbiAgXSxcblxuICBleHBvcnRzOiBbXG4gICAgLi4uQ09NUE9ORU5UUyxcbiAgICAuLi5ESVJFQ1RJVkVTLFxuICAgIC4uLlBJUEVTXG4gIF0sXG5cbiAgaW1wb3J0czogW1xuICAgIC4uLk1PRFVMRVMsXG4gIF1cblxufSlcblxuZXhwb3J0IGNsYXNzIExpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlNFUlZJQ0VTXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19