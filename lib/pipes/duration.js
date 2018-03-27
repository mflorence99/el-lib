import * as moment from 'moment';
import { Pipe } from '@angular/core';
/**
 * Pipe wrapper around moment.js
 */
var DurationPipe = /** @class */ (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value, fmt) {
        return moment.duration(value, fmt).humanize();
    };
    DurationPipe.decorators = [
        { type: Pipe, args: [{ name: 'libDuration' },] },
    ];
    /** @nocollapse */
    DurationPipe.ctorParameters = function () { return []; };
    return DurationPipe;
}());
export { DurationPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGlwZXMvZHVyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUFXbEQsZ0NBQVMsR0FBVCxVQUFVLEtBQVUsRUFDVixHQUFRO1FBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMvQzs7Z0JBUEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTs7Ozt1QkFUN0I7O1NBV2EsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBQaXBlIHdyYXBwZXIgYXJvdW5kIG1vbWVudC5qc1xyXG4gKi9cclxuXHJcbkBQaXBlKHsgbmFtZTogJ2xpYkR1cmF0aW9uJyB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSxcclxuICAgICAgICAgICAgZm10OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbih2YWx1ZSwgZm10KS5odW1hbml6ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19