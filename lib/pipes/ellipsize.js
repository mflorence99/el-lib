import { Pipe } from '@angular/core';
/**
 * Truncates a long string after N characters, then appends an ellipsis.
 * By default, N is 100.
 *
 * <a [href]="{{'very_long_URL'}}">
 *   {{'very_long_URL' | libEllipsize:64 | libBreakable}}
 * </a>
 *
 */
var EllipsizePipe = /** @class */ (function () {
    function EllipsizePipe() {
    }
    EllipsizePipe.prototype.transform = function (s, max, dflt) {
        if (max === void 0) { max = 100; }
        if (dflt === void 0) { dflt = ''; }
        if (s == null)
            return dflt;
        else
            return (s.length > max) ? s.substring(0, max) + "\u2026" : s;
    };
    EllipsizePipe.decorators = [
        { type: Pipe, args: [{ name: 'libEllipsize' },] },
    ];
    /** @nocollapse */
    EllipsizePipe.ctorParameters = function () { return []; };
    return EllipsizePipe;
}());
export { EllipsizePipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BpcGVzL2VsbGlwc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztJQWdCbEQsaUNBQVMsR0FBVCxVQUFVLENBQVMsRUFDVCxHQUFTLEVBQ1QsSUFBUztRQURULG9CQUFBLEVBQUEsU0FBUztRQUNULHFCQUFBLEVBQUEsU0FBUztRQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLElBQUk7WUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsV0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEU7O2dCQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUU7Ozs7d0JBWjlCOztTQWNhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVHJ1bmNhdGVzIGEgbG9uZyBzdHJpbmcgYWZ0ZXIgTiBjaGFyYWN0ZXJzLCB0aGVuIGFwcGVuZHMgYW4gZWxsaXBzaXMuXG4gKiBCeSBkZWZhdWx0LCBOIGlzIDEwMC5cbiAqXG4gKiA8YSBbaHJlZl09XCJ7eyd2ZXJ5X2xvbmdfVVJMJ319XCI+XG4gKiAgIHt7J3ZlcnlfbG9uZ19VUkwnIHwgbGliRWxsaXBzaXplOjY0IHwgbGliQnJlYWthYmxlfX1cbiAqIDwvYT5cbiAqXG4gKi9cblxuQFBpcGUoeyBuYW1lOiAnbGliRWxsaXBzaXplJyB9KVxuXG5leHBvcnQgY2xhc3MgRWxsaXBzaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShzOiBzdHJpbmcsXG4gICAgICAgICAgICBtYXggPSAxMDAsXG4gICAgICAgICAgICBkZmx0ID0gJycpOiBzdHJpbmcge1xuICAgIGlmIChzID09IG51bGwpXG4gICAgICByZXR1cm4gZGZsdDtcbiAgICBlbHNlIHJldHVybiAocy5sZW5ndGggPiBtYXgpPyBgJHtzLnN1YnN0cmluZygwLCBtYXgpfVxcdTIwMjZgIDogcztcbiAgfVxuXG59XG4iXX0=