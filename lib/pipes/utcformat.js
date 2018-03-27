import * as moment from 'moment';
import { Pipe } from '@angular/core';
/**
 * Pipe wrapper around moment.js
 */
var UTCFormatPipe = /** @class */ (function () {
    function UTCFormatPipe() {
    }
    UTCFormatPipe.prototype.transform = function (date, fmt) {
        return moment(date).utc().format(fmt);
    };
    UTCFormatPipe.decorators = [
        { type: Pipe, args: [{ name: 'libUTCFormat' },] },
    ];
    /** @nocollapse */
    UTCFormatPipe.ctorParameters = function () { return []; };
    return UTCFormatPipe;
}());
export { UTCFormatPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRjZm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BpcGVzL3V0Y2Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQVVsRCxpQ0FBUyxHQUFULFVBQVUsSUFBVSxFQUNWLEdBQVc7UUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdkM7O2dCQVBGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7Ozs7d0JBUjlCOztTQVVhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFBpcGUgd3JhcHBlciBhcm91bmQgbW9tZW50LmpzXG4gKi9cblxuQFBpcGUoeyBuYW1lOiAnbGliVVRDRm9ybWF0JyB9KVxuXG5leHBvcnQgY2xhc3MgVVRDRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShkYXRlOiBEYXRlLFxuICAgICAgICAgICAgZm10OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBtb21lbnQoZGF0ZSkudXRjKCkuZm9ybWF0KGZtdCk7XG4gIH1cblxufVxuIl19