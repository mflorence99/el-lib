import { Pipe } from '@angular/core';
/**
 * Makes a string breakable by adding a zero-width space after otherwise
 * non-breakabke soecial characters (like underscore).
 *
 * <a [href]="{{'very_long_URL'}}">
 *   {{'very_long_URL' | libBreakable}}
 * </a>
 *
 */
var BreakablePipe = /** @class */ (function () {
    function BreakablePipe() {
    }
    BreakablePipe.prototype.transform = function (s, dflt) {
        if (dflt === void 0) { dflt = ''; }
        if (s == null)
            return dflt;
        else if (typeof s.replace === 'function')
            return s.replace(/([\/;:\)\]\}\d\.,_%])/g, '\u200b$1');
        else
            return s;
    };
    BreakablePipe.decorators = [
        { type: Pipe, args: [{ name: 'libBreakable' },] },
    ];
    /** @nocollapse */
    BreakablePipe.ctorParameters = function () { return []; };
    return BreakablePipe;
}());
export { BreakablePipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWthYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BpcGVzL2JyZWFrYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7OztJQWlCbEQsaUNBQVMsR0FBVCxVQUFVLENBQVMsRUFDVCxJQUFTO1FBQVQscUJBQUEsRUFBQSxTQUFTO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUM7WUFDdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDekQsSUFBSTtZQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDZjs7Z0JBWEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTs7Ozt3QkFiOUI7O1NBZWEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG4vKipcclxuICogTWFrZXMgYSBzdHJpbmcgYnJlYWthYmxlIGJ5IGFkZGluZyBhIHplcm8td2lkdGggc3BhY2UgYWZ0ZXIgb3RoZXJ3aXNlXHJcbiAqIG5vbi1icmVha2Fia2Ugc29lY2lhbCBjaGFyYWN0ZXJzIChsaWtlIHVuZGVyc2NvcmUpLlxyXG4gKlxyXG4gKiA8YSBbaHJlZl09XCJ7eyd2ZXJ5X2xvbmdfVVJMJ319XCI+XHJcbiAqICAge3sndmVyeV9sb25nX1VSTCcgfCBsaWJCcmVha2FibGV9fVxyXG4gKiA8L2E+XHJcbiAqXHJcbiAqL1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbGliQnJlYWthYmxlJyB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJyZWFrYWJsZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHM6IHN0cmluZyxcclxuICAgICAgICAgICAgZGZsdCA9ICcnKTogc3RyaW5nIHtcclxuICAgIGlmIChzID09IG51bGwpXHJcbiAgICAgIHJldHVybiBkZmx0O1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHMucmVwbGFjZSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgcmV0dXJuIHMucmVwbGFjZSgvKFtcXC87OlxcKVxcXVxcfVxcZFxcLixfJV0pL2csICdcXHUyMDBiJDEnKTtcclxuICAgIGVsc2UgcmV0dXJuIHM7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=