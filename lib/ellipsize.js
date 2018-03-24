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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWxsaXBzaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7O0lBZ0JsRCxpQ0FBUyxHQUFULFVBQVUsQ0FBUyxFQUNULEdBQVMsRUFDVCxJQUFTO1FBRFQsb0JBQUEsRUFBQSxTQUFTO1FBQ1QscUJBQUEsRUFBQSxTQUFTO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsSUFBSTtZQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxXQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsRTs7Z0JBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTs7Ozt3QkFaOUI7O1NBY2EsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUcnVuY2F0ZXMgYSBsb25nIHN0cmluZyBhZnRlciBOIGNoYXJhY3RlcnMsIHRoZW4gYXBwZW5kcyBhbiBlbGxpcHNpcy5cbiAqIEJ5IGRlZmF1bHQsIE4gaXMgMTAwLlxuICpcbiAqIDxhIFtocmVmXT1cInt7J3ZlcnlfbG9uZ19VUkwnfX1cIj5cbiAqICAge3sndmVyeV9sb25nX1VSTCcgfCBsaWJFbGxpcHNpemU6NjQgfCBsaWJCcmVha2FibGV9fVxuICogPC9hPlxuICpcbiAqL1xuXG5AUGlwZSh7IG5hbWU6ICdsaWJFbGxpcHNpemUnIH0pXG5cbmV4cG9ydCBjbGFzcyBFbGxpcHNpemVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHM6IHN0cmluZyxcbiAgICAgICAgICAgIG1heCA9IDEwMCxcbiAgICAgICAgICAgIGRmbHQgPSAnJyk6IHN0cmluZyB7XG4gICAgaWYgKHMgPT0gbnVsbClcbiAgICAgIHJldHVybiBkZmx0O1xuICAgIGVsc2UgcmV0dXJuIChzLmxlbmd0aCA+IG1heCk/IGAke3Muc3Vic3RyaW5nKDAsIG1heCl9XFx1MjAyNmAgOiBzO1xuICB9XG5cbn1cbiJdfQ==