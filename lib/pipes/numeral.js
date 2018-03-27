import { Pipe } from '@angular/core';
/**
 * Pipe wrapper around numeral.js
 */
var NumeralPipe = /** @class */ (function () {
    function NumeralPipe() {
    }
    NumeralPipe.prototype.transform = function (value, fmt, dflt) {
        if (dflt === void 0) { dflt = ''; }
        if (value == null)
            return dflt;
        else
            return numeral(Number(value)).format(fmt);
    };
    NumeralPipe.decorators = [
        { type: Pipe, args: [{ name: 'libNumeral' },] },
    ];
    /** @nocollapse */
    NumeralPipe.ctorParameters = function () { return []; };
    return NumeralPipe;
}());
export { NumeralPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXBlcy9udW1lcmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lBYWxELCtCQUFTLEdBQVQsVUFBVSxLQUFVLEVBQ1YsR0FBVyxFQUNYLElBQVM7UUFBVCxxQkFBQSxFQUFBLFNBQVM7UUFDakIsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hEOztnQkFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFOzs7O3NCQVQ1Qjs7U0FXYSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIG51bWVyYWw6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBQaXBlIHdyYXBwZXIgYXJvdW5kIG51bWVyYWwuanNcclxuICovXHJcblxyXG5AUGlwZSh7IG5hbWU6ICdsaWJOdW1lcmFsJyB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIE51bWVyYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LFxyXG4gICAgICAgICAgICBmbXQ6IHN0cmluZyxcclxuICAgICAgICAgICAgZGZsdCA9ICcnKTogc3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxyXG4gICAgICByZXR1cm4gZGZsdDtcclxuICAgIGVsc2UgcmV0dXJuIG51bWVyYWwoTnVtYmVyKHZhbHVlKSkuZm9ybWF0KGZtdCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=