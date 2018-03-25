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
                    styles: ["\n    :host {\n      display: block;\n      height: 100%;\n      position: relative;\n      overflow: hidden;\n      width: 100%;\n    }\n\n    .drawer-mask {\n      background-color: rgba(128, 128, 128, 0.5);\n      height: 100%;\n      left: 0;\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      width: 100%;\n      z-index: -1;\n    }\n\n    .masked {\n      opacity: 1;\n      z-index: 99;\n    }\n  "],
                    template: "\n    <ng-content></ng-content>\n\n    <div\n      (click)=\"closeAll()\"\n      [ngClass]=\"{'masked': masked}\"\n      class=\"drawer-mask\">\n    </div>"
                },] },
    ];
    /** @nocollapse */
    DrawerContainerComponent.ctorParameters = function () { return []; };
    return DrawerContainerComponent;
}());
export { DrawerContainerComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLWNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2RyYXdlci1jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O3VCQWlEOUI7WUFDUixNQUFNLEVBQUUsSUFBNEI7WUFDcEMsSUFBSSxFQUFFLElBQTRCO1lBQ2xDLEtBQUssRUFBRSxJQUE0QjtZQUNuQyxHQUFHLEVBQUUsSUFBNEI7U0FDbEM7O0lBSUQsNEJBQTRCOztJQUM1QiwyQ0FBUTtJQUFSO1FBQUEsaUJBTUM7UUFMQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO1lBQ3hDLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNULE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQixDQUFDLENBQUM7S0FDSjtJQUVELCtCQUErQjs7SUFDL0IseUNBQU07SUFBTixVQUFPLE1BQTRCO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3JCO0lBRUQsK0JBQStCOztJQUMvQix5Q0FBTTtJQUFOLFVBQU8sTUFBNEI7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7S0FDcEI7O2dCQWxFRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87b0JBQ2hELFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLE1BQU0sRUFBRSxDQUFDLHVhQXdCUixDQUFDO29CQUNGLFFBQVEsRUFBRSw2SkFPRDtpQkFDVjs7OzttQ0E5Q0Q7O1NBZ0RhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYXdlclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9kcmF3ZXItcGFuZWwnO1xuXG4vKipcbiAqIGxpYi1kcmF3ZXItY29udGFpbmVyXG4gKlxuICogVXNlZCB0byBob2xkIGxpYi1kcmF3ZXItcGFuZWxzXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgc2VsZWN0b3I6ICdsaWItZHJhd2VyLWNvbnRhaW5lcicsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZHJhd2VyLW1hc2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cblxuICAgIC5tYXNrZWQge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHotaW5kZXg6IDk5O1xuICAgIH1cbiAgYF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXG4gICAgPGRpdlxuICAgICAgKGNsaWNrKT1cImNsb3NlQWxsKClcIlxuICAgICAgW25nQ2xhc3NdPVwieydtYXNrZWQnOiBtYXNrZWR9XCJcbiAgICAgIGNsYXNzPVwiZHJhd2VyLW1hc2tcIj5cbiAgICA8L2Rpdj5gXG59KVxuXG5leHBvcnQgY2xhc3MgRHJhd2VyQ29udGFpbmVyQ29tcG9uZW50IHtcblxuICBkcmF3ZXJzID0ge1xuICAgIGJvdHRvbTogbnVsbCBhcyBEcmF3ZXJQYW5lbENvbXBvbmVudCxcbiAgICBsZWZ0OiBudWxsIGFzIERyYXdlclBhbmVsQ29tcG9uZW50LFxuICAgIHJpZ2h0OiBudWxsIGFzIERyYXdlclBhbmVsQ29tcG9uZW50LFxuICAgIHRvcDogbnVsbCBhcyBEcmF3ZXJQYW5lbENvbXBvbmVudFxuICB9O1xuXG4gIG1hc2tlZDogYm9vbGVhbjtcblxuICAvKiogQ2xvc2UgYWxsIHRoZSBkcmF3ZXJzICovXG4gIGNsb3NlQWxsKCkge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZHJhd2VycykuZm9yRWFjaChwb3NpdGlvbiA9PiB7XG4gICAgICBjb25zdCBkcmF3ZXIgPSB0aGlzLmRyYXdlcnNbcG9zaXRpb25dO1xuICAgICAgaWYgKGRyYXdlcilcbiAgICAgICAgZHJhd2VyLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogQSBkcmF3ZXIgaGFzIGJlZW4gY2xvc2VkICovXG4gIGNsb3NlZChkcmF3ZXI6IERyYXdlclBhbmVsQ29tcG9uZW50KSB7XG4gICAgdGhpcy5tYXNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKiBBIGRyYXdlciBoYXMgYmVlbiBvcGVuZWQgKi9cbiAgb3BlbmVkKGRyYXdlcjogRHJhd2VyUGFuZWxDb21wb25lbnQpIHtcbiAgICB0aGlzLm1hc2tlZCA9IHRydWU7XG4gIH1cblxufVxuIl19