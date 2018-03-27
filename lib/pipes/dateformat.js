import * as moment from 'moment';
import { Pipe } from '@angular/core';
/**
 * Pipe wrapper around moment.js
 */
var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (date, fmt) {
        return moment(date).format(fmt);
    };
    DateFormatPipe.decorators = [
        { type: Pipe, args: [{ name: 'libDateFormat' },] },
    ];
    /** @nocollapse */
    DateFormatPipe.ctorParameters = function () { return []; };
    return DateFormatPipe;
}());
export { DateFormatPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXBlcy9kYXRlZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBVWxELGtDQUFTLEdBQVQsVUFBVSxJQUFVLEVBQ1YsR0FBVztRQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQzs7Z0JBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRTs7Ozt5QkFSL0I7O1NBVWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogUGlwZSB3cmFwcGVyIGFyb3VuZCBtb21lbnQuanNcbiAqL1xuXG5AUGlwZSh7IG5hbWU6ICdsaWJEYXRlRm9ybWF0JyB9KVxuXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZSxcbiAgICAgICAgICAgIGZtdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmbXQpO1xuICB9XG5cbn1cbiJdfQ==