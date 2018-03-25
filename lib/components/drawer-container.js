import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
/**
 * lib-drawer-container
 *
 * Used to hold lib-drawer-panels
 */
var DrawerContainerComponent = /** @class */ (function () {
    function DrawerContainerComponent() {
        this.drawers = {
            bottom: null,
            left: null,
            right: null,
            top: null
        };
    }
    /** Close all the drawers */
    /** Close all the drawers */
    DrawerContainerComponent.prototype.closeAll = /** Close all the drawers */
    function () {
        var _this = this;
        Object.keys(this.drawers).forEach(function (position) {
            var drawer = _this.drawers[position];
            if (drawer)
                drawer.close();
        });
    };
    /** A drawer has been closed */
    /** A drawer has been closed */
    DrawerContainerComponent.prototype.closed = /** A drawer has been closed */
    function (drawer) {
        this.masked = false;
    };
    /** A drawer has been opened */
    /** A drawer has been opened */
    DrawerContainerComponent.prototype.opened = /** A drawer has been opened */
    function (drawer) {
        this.masked = true;
    };
    DrawerContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.Default,
                    selector: 'lib-drawer-container',
                    styles: ["\n    :host {\n      display: block;\n      height: 100%;\n      position: relative;\n      overflow: hidden;\n      width: 100%;\n    }\n\n    .drawer-mask {\n      background-color: rgba(128, 128, 128, 0.5);\n      height: 100%;\n      left: 0;\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      width: 100%;\n      z-index: -1;\n\n      &.masked {\n        opacity: 1;\n        z-index: 99;\n      }\n\n    }\n  "],
                    template: "\n    <ng-content></ng-content>\n\n    <div\n      (click)=\"closeAll()\"\n      [ngClass]=\"{'masked': masked}\"\n      class=\"drawer-mask\">\n    </div>"
                },] },
    ];
    /** @nocollapse */
    DrawerContainerComponent.ctorParameters = function () { return []; };
    return DrawerContainerComponent;
}());
export { DrawerContainerComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLWNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2RyYXdlci1jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O3VCQWtEOUI7WUFDUixNQUFNLEVBQUUsSUFBNEI7WUFDcEMsSUFBSSxFQUFFLElBQTRCO1lBQ2xDLEtBQUssRUFBRSxJQUE0QjtZQUNuQyxHQUFHLEVBQUUsSUFBNEI7U0FDbEM7O0lBSUQsNEJBQTRCOztJQUM1QiwyQ0FBUTtJQUFSO1FBQUEsaUJBTUM7UUFMQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO1lBQ3hDLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNULE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQixDQUFDLENBQUM7S0FDSjtJQUVELCtCQUErQjs7SUFDL0IseUNBQU07SUFBTixVQUFPLE1BQTRCO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3JCO0lBRUQsK0JBQStCOztJQUMvQix5Q0FBTTtJQUFOLFVBQU8sTUFBNEI7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7S0FDcEI7O2dCQW5FRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87b0JBQ2hELFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLE1BQU0sRUFBRSxDQUFDLGtiQXlCUixDQUFDO29CQUNGLFFBQVEsRUFBRSw2SkFPRDtpQkFDVjs7OzttQ0EvQ0Q7O1NBaURhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYXdlclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9kcmF3ZXItcGFuZWwnO1xuXG4vKipcbiAqIGxpYi1kcmF3ZXItY29udGFpbmVyXG4gKlxuICogVXNlZCB0byBob2xkIGxpYi1kcmF3ZXItcGFuZWxzXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgc2VsZWN0b3I6ICdsaWItZHJhd2VyLWNvbnRhaW5lcicsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZHJhd2VyLW1hc2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHotaW5kZXg6IC0xO1xuXG4gICAgICAmLm1hc2tlZCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgfVxuXG4gICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cbiAgICA8ZGl2XG4gICAgICAoY2xpY2spPVwiY2xvc2VBbGwoKVwiXG4gICAgICBbbmdDbGFzc109XCJ7J21hc2tlZCc6IG1hc2tlZH1cIlxuICAgICAgY2xhc3M9XCJkcmF3ZXItbWFza1wiPlxuICAgIDwvZGl2PmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBEcmF3ZXJDb250YWluZXJDb21wb25lbnQge1xuXG4gIGRyYXdlcnMgPSB7XG4gICAgYm90dG9tOiBudWxsIGFzIERyYXdlclBhbmVsQ29tcG9uZW50LFxuICAgIGxlZnQ6IG51bGwgYXMgRHJhd2VyUGFuZWxDb21wb25lbnQsXG4gICAgcmlnaHQ6IG51bGwgYXMgRHJhd2VyUGFuZWxDb21wb25lbnQsXG4gICAgdG9wOiBudWxsIGFzIERyYXdlclBhbmVsQ29tcG9uZW50XG4gIH07XG5cbiAgbWFza2VkOiBib29sZWFuO1xuXG4gIC8qKiBDbG9zZSBhbGwgdGhlIGRyYXdlcnMgKi9cbiAgY2xvc2VBbGwoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5kcmF3ZXJzKS5mb3JFYWNoKHBvc2l0aW9uID0+IHtcbiAgICAgIGNvbnN0IGRyYXdlciA9IHRoaXMuZHJhd2Vyc1twb3NpdGlvbl07XG4gICAgICBpZiAoZHJhd2VyKVxuICAgICAgICBkcmF3ZXIuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBBIGRyYXdlciBoYXMgYmVlbiBjbG9zZWQgKi9cbiAgY2xvc2VkKGRyYXdlcjogRHJhd2VyUGFuZWxDb21wb25lbnQpIHtcbiAgICB0aGlzLm1hc2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqIEEgZHJhd2VyIGhhcyBiZWVuIG9wZW5lZCAqL1xuICBvcGVuZWQoZHJhd2VyOiBEcmF3ZXJQYW5lbENvbXBvbmVudCkge1xuICAgIHRoaXMubWFza2VkID0gdHJ1ZTtcbiAgfVxuXG59XG4iXX0=