import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { ResizeSensor } from 'css-element-queries';
var ResizedDirective = /** @class */ (function () {
    function ResizedDirective(element) {
        this.element = element;
        this.libResized = new EventEmitter();
    }
    ResizedDirective.prototype.ngOnInit = function () {
        var _this = this;
        // tslint:disable-next-line:no-unused-expression
        new ResizeSensor(this.element.nativeElement, function (x) { return _this.onResized(); });
        this.onResized();
    };
    ResizedDirective.prototype.onResized = function () {
        var newWidth = this.element.nativeElement.clientWidth;
        var newHeight = this.element.nativeElement.clientHeight;
        if (newWidth === this.oldWidth && newHeight === this.oldHeight) {
            return;
        }
        var event = new ResizedEvent(this.element, newWidth, newHeight, this.oldWidth, this.oldHeight);
        this.oldWidth = this.element.nativeElement.clientWidth;
        this.oldHeight = this.element.nativeElement.clientHeight;
        this.libResized.next(event);
    };
    ResizedDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[libResized]'
                },] },
    ];
    /** @nocollapse */
    ResizedDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ResizedDirective.propDecorators = {
        "libResized": [{ type: Output },],
    };
    return ResizedDirective;
}());
export { ResizedDirective };
var ResizedEvent = /** @class */ (function () {
    function ResizedEvent(element, newWidth, newHeight, oldWidth, oldHeight) {
        this.element = element;
        this.newWidth = newWidth;
        this.newHeight = newHeight;
        this.oldWidth = oldWidth;
        this.oldHeight = oldHeight;
    }
    return ResizedEvent;
}());
export { ResizedEvent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXJlY3RpdmVzL3Jlc2l6ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBYWpELDBCQUE2QixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZOzBCQUwxQixJQUFJLFlBQVksRUFBZ0I7S0FNckQ7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBSUM7O1FBRkMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDbEI7SUFFTyxvQ0FBUyxHQUFqQjtRQUNFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUN4RCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFFMUQsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQztTQUNSO1FBRUQsSUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQzVCLElBQUksQ0FBQyxPQUFPLEVBQ1osUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUV6RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3Qjs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBTm1CLFVBQVU7OzsrQkFTM0IsTUFBTTs7MkJBVFQ7O1NBT2EsZ0JBQWdCO0FBd0M3QixJQUFBO0lBQ0Usc0JBQ1csT0FBbUIsRUFDbkIsUUFBZ0IsRUFDaEIsU0FBaUIsRUFDakIsUUFBZ0IsRUFDaEIsU0FBaUI7UUFKakIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFRO0tBQ3hCO3VCQXRETjtJQXVEQyxDQUFBO0FBUkQsd0JBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVzaXplU2Vuc29yIH0gZnJvbSAnY3NzLWVsZW1lbnQtcXVlcmllcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsaWJSZXNpemVkXSdcbn0pXG5leHBvcnQgY2xhc3MgUmVzaXplZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGxpYlJlc2l6ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2l6ZWRFdmVudD4oKTtcblxuICBwcml2YXRlIG9sZFdpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgb2xkSGVpZ2h0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgUmVzaXplU2Vuc29yKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB4ID0+IHRoaXMub25SZXNpemVkKCkpO1xuICAgIHRoaXMub25SZXNpemVkKCk7XG4gIH1cblxuICBwcml2YXRlIG9uUmVzaXplZCgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdXaWR0aCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IG5ld0hlaWdodCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIGlmIChuZXdXaWR0aCA9PT0gdGhpcy5vbGRXaWR0aCAmJiBuZXdIZWlnaHQgPT09IHRoaXMub2xkSGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgUmVzaXplZEV2ZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgbmV3V2lkdGgsXG4gICAgICBuZXdIZWlnaHQsXG4gICAgICB0aGlzLm9sZFdpZHRoLFxuICAgICAgdGhpcy5vbGRIZWlnaHQpO1xuXG4gICAgdGhpcy5vbGRXaWR0aCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHRoaXMub2xkSGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5saWJSZXNpemVkLm5leHQoZXZlbnQpO1xuICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFJlc2l6ZWRFdmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcmVhZG9ubHkgbmV3V2lkdGg6IG51bWJlcixcbiAgICByZWFkb25seSBuZXdIZWlnaHQ6IG51bWJlcixcbiAgICByZWFkb25seSBvbGRXaWR0aDogbnVtYmVyLFxuICAgIHJlYWRvbmx5IG9sZEhlaWdodDogbnVtYmVyXG4gICkge31cbn1cbiJdfQ==