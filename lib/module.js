import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerContainerComponent } from './components/drawer-container';
import { DrawerPanelComponent } from './components/drawer-panel';
import { EllipsizePipe } from './pipes/ellipsize';
import { RouterModule } from '@angular/router';
/**
 * el-lib moduke definition
 */
var COMPONENTS = [
    DrawerContainerComponent,
    DrawerPanelComponent
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
                    exports: COMPONENTS.concat(PIPES, [
                        CommonModule,
                        RouterModule
                    ]),
                    imports: [
                        CommonModule,
                        RouterModule
                    ]
                },] },
    ];
    /** @nocollapse */
    LibModule.ctorParameters = function () { return []; };
    return LibModule;
}());
export { LibModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQU0vQyxJQUFNLFVBQVUsR0FBRztJQUNqQix3QkFBd0I7SUFDeEIsb0JBQW9CO0NBQ3JCLENBQUM7QUFFRixJQUFNLEtBQUssR0FBRztJQUNaLGFBQWE7Q0FDZCxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUcsRUFBRyxDQUFDOzs7O0lBd0JaLGlCQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQ0osUUFBUSxRQUNaO1NBQ0YsQ0FBQztLQUNIOztnQkE3QkYsUUFBUSxTQUFDO29CQUVSLFlBQVksRUFDUCxVQUFVLFFBQ1YsS0FBSyxDQUNUO29CQUVELE9BQU8sRUFDRixVQUFVLFFBQ1YsS0FBSzt3QkFDUixZQUFZO3dCQUNaLFlBQVk7c0JBQ2I7b0JBRUQsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTtxQkFDYjtpQkFFRjs7OztvQkExQ0Q7O1NBNENhLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHJhd2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RyYXdlci1jb250YWluZXInO1xuaW1wb3J0IHsgRHJhd2VyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJhd2VyLXBhbmVsJztcbmltcG9ydCB7IEVsbGlwc2l6ZVBpcGUgfSBmcm9tICcuL3BpcGVzL2VsbGlwc2l6ZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIGVsLWxpYiBtb2R1a2UgZGVmaW5pdGlvblxuICovXG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIERyYXdlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgRHJhd2VyUGFuZWxDb21wb25lbnRcbl07XG5cbmNvbnN0IFBJUEVTID0gW1xuICBFbGxpcHNpemVQaXBlXG5dO1xuXG5jb25zdCBTRVJWSUNFUyA9IFsgXTtcblxuQE5nTW9kdWxlKHtcblxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5DT01QT05FTlRTLFxuICAgIC4uLlBJUEVTXG4gIF0sXG5cbiAgZXhwb3J0czogW1xuICAgIC4uLkNPTVBPTkVOVFMsXG4gICAgLi4uUElQRVMsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZVxuICBdLFxuXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlXG4gIF1cblxufSlcblxuZXhwb3J0IGNsYXNzIExpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlNFUlZJQ0VTXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19