var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
/**
 * A directive to handle form submit via calueChanges
 */
var RxfSubmitDirective = /** @class */ (function () {
    function RxfSubmitDirective() {
    }
    // listeners
    RxfSubmitDirective.prototype.onSubmit = 
    // listeners
    function () {
        var emitter = this.el3270RxfSubmit.valueChanges;
        emitter.emit(__assign({}, this.el3270RxfSubmit.value, { submitted: true }));
    };
    RxfSubmitDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[libRxfSubmit]'
                },] },
    ];
    /** @nocollapse */
    RxfSubmitDirective.ctorParameters = function () { return []; };
    RxfSubmitDirective.propDecorators = {
        "el3270RxfSubmit": [{ type: Input },],
        "onSubmit": [{ type: HostListener, args: ['submit',] },],
    };
    return RxfSubmitDirective;
}());
export { RxfSubmitDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnhmLXN1Ym1pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXJlY3RpdmVzL3J4Zi1zdWJtaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQixZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUFlakIscUNBQVE7OztRQUM5QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQWlDLENBQUM7UUFDdkUsT0FBTyxDQUFDLElBQUksY0FBTSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssSUFBRSxTQUFTLEVBQUUsSUFBSSxJQUFHLENBQUM7OztnQkFYcEUsU0FBUyxTQUFFO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7OztvQ0FHRSxLQUFLOzZCQUlMLFlBQVksU0FBQyxRQUFROzs2QkFqQnhCOztTQVlhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0byBoYW5kbGUgZm9ybSBzdWJtaXQgdmlhIGNhbHVlQ2hhbmdlc1xuICovXG5cbkBEaXJlY3RpdmUgKHtcbiAgc2VsZWN0b3I6ICdbbGliUnhmU3VibWl0XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBSeGZTdWJtaXREaXJlY3RpdmUge1xuICBASW5wdXQoKSBlbDMyNzBSeGZTdWJtaXQ6IEZvcm1Hcm91cDtcblxuICAvLyBsaXN0ZW5lcnNcblxuICBASG9zdExpc3RlbmVyKCdzdWJtaXQnKSBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCBlbWl0dGVyID0gdGhpcy5lbDMyNzBSeGZTdWJtaXQudmFsdWVDaGFuZ2VzIGFzIEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIGVtaXR0ZXIuZW1pdCh7IC4uLnRoaXMuZWwzMjcwUnhmU3VibWl0LnZhbHVlLCBzdWJtaXR0ZWQ6IHRydWUgfSk7XG4gIH1cblxufVxuIl19