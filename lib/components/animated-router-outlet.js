import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { routeAnimation } from '../animations';
/**
 * Animate a router outlet
 */
var AnimatedRouterOutletComponent = /** @class */ (function () {
    /** ctor */
    function AnimatedRouterOutletComponent(router) {
        this.router = router;
    }
    Object.defineProperty(AnimatedRouterOutletComponent.prototype, "trigger", {
        get: function () {
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    // lifecycle methods
    // lifecycle methods
    AnimatedRouterOutletComponent.prototype.ngOnInit = 
    // lifecycle methods
    function () {
        var _this = this;
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; }), tap(function (event) { return _this.url = event.url; })).subscribe();
    };
    AnimatedRouterOutletComponent.decorators = [
        { type: Component, args: [{
                    animations: [routeAnimation()],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'lib-animated-router-outlet',
                    styles: ["\n    :host {\n      display: block;\n      position: relative;\n    }\n  "],
                    template: '<router-outlet></router-outlet>'
                },] },
    ];
    /** @nocollapse */
    AnimatedRouterOutletComponent.ctorParameters = function () { return [
        { type: Router, },
    ]; };
    AnimatedRouterOutletComponent.propDecorators = {
        "trigger": [{ type: HostBinding, args: ['@routeAnimation',] },],
    };
    return AnimatedRouterOutletComponent;
}());
export { AnimatedRouterOutletComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZWQtcm91dGVyLW91dGxldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2FuaW1hdGVkLXJvdXRlci1vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lBMkI3QyxXQUFXO0lBQ1gsdUNBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0tBQUs7MEJBTEgsa0RBQU87O1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7OztJQU1sQixvQkFBb0I7O0lBRXBCLGdEQUFROztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ25CLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssWUFBWSxhQUFhLEVBQTlCLENBQThCLENBQUMsRUFDL0MsR0FBRyxDQUFDLFVBQUMsS0FBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBcEIsQ0FBb0IsQ0FBQyxDQUNwRCxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2pCOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFVBQVUsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUM5QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsTUFBTSxFQUFFLENBQUMsNEVBS1IsQ0FBQztvQkFDRixRQUFRLEVBQUUsaUNBQWlDO2lCQUM1Qzs7OztnQkFwQnVCLE1BQU07Ozs0QkEwQjNCLFdBQVcsU0FBQyxpQkFBaUI7O3dDQTNCaEM7O1NBdUJhLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgcm91dGVBbmltYXRpb24gfSBmcm9tICcuLi9hbmltYXRpb25zJztcblxuLyoqXG4gKiBBbmltYXRlIGEgcm91dGVyIG91dGxldFxuICovXG5cbkBDb21wb25lbnQoe1xuICBhbmltYXRpb25zOiBbcm91dGVBbmltYXRpb24oKV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ2xpYi1hbmltYXRlZC1yb3V0ZXItb3V0bGV0JyxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiAnPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0Pidcbn0pXG5cbmV4cG9ydCBjbGFzcyBBbmltYXRlZFJvdXRlck91dGxldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdXJsOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdAcm91dGVBbmltYXRpb24nKSBnZXQgdHJpZ2dlcigpIHtcbiAgICByZXR1cm4gdGhpcy51cmw7XG4gIH1cblxuICAvKiogY3RvciAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICAvLyBsaWZlY3ljbGUgbWV0aG9kc1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgICAgdGFwKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4gdGhpcy51cmwgPSBldmVudC51cmwpXG4gICAgICApLnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiJdfQ==