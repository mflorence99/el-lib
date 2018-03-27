import * as moment from 'moment';
import { Pipe } from '@angular/core';
/**
 * Pipe wrapper around moment.js
 */
var FromUnixTimePipe = /** @class */ (function () {
    function FromUnixTimePipe() {
    }
    FromUnixTimePipe.prototype.transform = function (value) {
        return moment.unix(Number(value) / 1000);
    };
    FromUnixTimePipe.decorators = [
        { type: Pipe, args: [{ name: 'libFromUnixTime' },] },
    ];
    /** @nocollapse */
    FromUnixTimePipe.ctorParameters = function () { return []; };
    return FromUnixTimePipe;
}());
export { FromUnixTimePipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbXVuaXh0aW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BpcGVzL2Zyb211bml4dGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQVVsRCxvQ0FBUyxHQUFULFVBQVUsS0FBVTtRQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDMUM7O2dCQUxGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTs7OzsyQkFUakM7O1NBVWEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFBpcGUgd3JhcHBlciBhcm91bmQgbW9tZW50LmpzXHJcbiAqL1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbGliRnJvbVVuaXhUaW1lJyB9KVxyXG5leHBvcnQgY2xhc3MgRnJvbVVuaXhUaW1lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gbW9tZW50LnVuaXgoTnVtYmVyKHZhbHVlKSAvIDEwMDApO1xyXG4gIH1cclxuXHJcbn1cclxuIl19