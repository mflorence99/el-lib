import * as moment from 'moment';
import { ChangeDetectorRef, Pipe } from '@angular/core';
/**
 * Pipe wrapper around moment.js
 */
var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe(_cdRef) {
        this._cdRef = _cdRef;
    }
    TimeAgoPipe.prototype.transform = function (value) {
        var _this = this;
        var momentInstance = moment(value);
        this.removeTimer();
        var timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = setTimeout(function () { return _this._cdRef.markForCheck(); }, timeToUpdate);
        return moment(value).from(moment());
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.currentTimer) {
            clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (momentInstance) {
        var howOld = Math.abs(moment().diff(momentInstance, 'minute'));
        if (howOld < 1)
            return 1;
        else if (howOld < 60)
            return 30;
        else if (howOld < 180)
            return 300;
        else
            return 3600;
    };
    TimeAgoPipe.decorators = [
        { type: Pipe, args: [{ name: 'libTimeAgo' },] },
    ];
    /** @nocollapse */
    TimeAgoPipe.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
    ]; };
    return TimeAgoPipe;
}());
export { TimeAgoPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWFnby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXBlcy90aW1lYWdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBYSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7OztJQVdoRixxQkFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7S0FBSztJQUVsRCwrQkFBUyxHQUFULFVBQVUsS0FBVTtRQUFwQixpQkFNQztRQUxDLElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN2RSxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBMUIsQ0FBMEIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMvRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsaUNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjtJQUVPLGlDQUFXLEdBQW5CO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtLQUNGO0lBRU8sMkNBQXFCLEdBQTdCLFVBQThCLGNBQTZCO1FBQ3pELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDbkIsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixJQUFJO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNsQjs7Z0JBbkNGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7Ozs7Z0JBTm5CLGlCQUFpQjs7c0JBRjFCOztTQVVhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFBpcGUgd3JhcHBlciBhcm91bmQgbW9tZW50LmpzXG4gKi9cblxuQFBpcGUoeyBuYW1lOiAnbGliVGltZUFnbycgfSlcblxuZXhwb3J0IGNsYXNzIFRpbWVBZ29QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjdXJyZW50VGltZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgbW9tZW50SW5zdGFuY2UgPSBtb21lbnQodmFsdWUpO1xuICAgIHRoaXMucmVtb3ZlVGltZXIoKTtcbiAgICBjb25zdCB0aW1lVG9VcGRhdGUgPSB0aGlzLmdldFNlY29uZHNVbnRpbFVwZGF0ZShtb21lbnRJbnN0YW5jZSkgKiAxMDAwO1xuICAgIHRoaXMuY3VycmVudFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKSwgdGltZVRvVXBkYXRlKTtcbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mcm9tKG1vbWVudCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlVGltZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlVGltZXIoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5jdXJyZW50VGltZXIpO1xuICAgICAgdGhpcy5jdXJyZW50VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2Vjb25kc1VudGlsVXBkYXRlKG1vbWVudEluc3RhbmNlOiBtb21lbnQuTW9tZW50KSB7XG4gICAgY29uc3QgaG93T2xkID0gTWF0aC5hYnMobW9tZW50KCkuZGlmZihtb21lbnRJbnN0YW5jZSwgJ21pbnV0ZScpKTtcbiAgICBpZiAoaG93T2xkIDwgMSlcbiAgICAgIHJldHVybiAxO1xuICAgIGVsc2UgaWYgKGhvd09sZCA8IDYwKVxuICAgICAgcmV0dXJuIDMwO1xuICAgIGVsc2UgaWYgKGhvd09sZCA8IDE4MClcbiAgICAgIHJldHVybiAzMDA7XG4gICAgZWxzZSByZXR1cm4gMzYwMDtcbiAgfVxufVxuIl19