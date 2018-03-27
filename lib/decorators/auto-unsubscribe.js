import { EventEmitter } from '@angular/core';
/**
 * Decorator to automatically unsubscribe from anything that's subscribable
 * when a component is destroyed.
 *
 * https://github.com/NetanelBasal/ngx-auto-unsubscribe
 *  /blob/master/dist/ngx-auto-unsubscribe.js
 */
export function AutoUnsubscribe(blacklist) {
    if (blacklist === void 0) { blacklist = []; }
    return function (ctor) {
        // cache the original ngOnDestroy if any
        var original = ctor.prototype.ngOnDestroy;
        // replace it with this one:
        ctor.prototype.ngOnDestroy = function () {
            var _this = this;
            // first, look at every property that has an unsubscribe method
            // and call its unsubscribe()
            Object.keys(this).forEach(function (key) {
                var property = _this[key];
                if (property
                    && (!(property instanceof EventEmitter))
                    && (typeof property.unsubscribe === 'function')
                    && (blacklist.indexOf(key) === -1)) {
                    console.log('%c @AutoUnsubscribe()', 'color: gray', "to " + key);
                    property.unsubscribe();
                }
            });
            // then, execute the original ngOnDestroy
            if (original
                && (typeof original === 'function'))
                original.apply(this, arguments);
        };
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by11bnN1YnNjcmliZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNvcmF0b3JzL2F1dG8tdW5zdWJzY3JpYmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFVN0MsTUFBTSwwQkFBMEIsU0FBd0I7SUFBeEIsMEJBQUEsRUFBQSxjQUF3QjtJQUV0RCxNQUFNLENBQUMsVUFBUyxJQUFjOztRQUU1QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQzs7UUFFNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUc7WUFBQSxpQkFpQjVCOzs7WUFkQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7Z0JBQzNCLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsRUFBRSxDQUFDLENBQUMsUUFBUTt1QkFDUixDQUFDLENBQUMsQ0FBQyxRQUFRLFlBQVksWUFBWSxDQUFDLENBQUM7dUJBQ3JDLENBQUMsT0FBTyxRQUFRLENBQUMsV0FBVyxLQUFLLFVBQVUsQ0FBQzt1QkFDNUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLGFBQWEsRUFBRSxRQUFNLEdBQUssQ0FBQyxDQUFDO29CQUNqRSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3hCO2FBQ0YsQ0FBQyxDQUFDOztZQUVILEVBQUUsQ0FBQyxDQUFDLFFBQVE7bUJBQ1IsQ0FBQyxPQUFPLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQztnQkFDbkMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbkMsQ0FBQztLQUNILENBQUM7Q0FFSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIERlY29yYXRvciB0byBhdXRvbWF0aWNhbGx5IHVuc3Vic2NyaWJlIGZyb20gYW55dGhpbmcgdGhhdCdzIHN1YnNjcmliYWJsZVxuICogd2hlbiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL05ldGFuZWxCYXNhbC9uZ3gtYXV0by11bnN1YnNjcmliZVxuICogIC9ibG9iL21hc3Rlci9kaXN0L25neC1hdXRvLXVuc3Vic2NyaWJlLmpzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIEF1dG9VbnN1YnNjcmliZShibGFja2xpc3Q6IHN0cmluZ1tdID0gW10pIHtcblxuICByZXR1cm4gZnVuY3Rpb24oY3RvcjogRnVuY3Rpb24pIHtcbiAgICAvLyBjYWNoZSB0aGUgb3JpZ2luYWwgbmdPbkRlc3Ryb3kgaWYgYW55XG4gICAgY29uc3Qgb3JpZ2luYWwgPSBjdG9yLnByb3RvdHlwZS5uZ09uRGVzdHJveTtcbiAgICAvLyByZXBsYWNlIGl0IHdpdGggdGhpcyBvbmU6XG4gICAgY3Rvci5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBmaXJzdCwgbG9vayBhdCBldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyBhbiB1bnN1YnNjcmliZSBtZXRob2RcbiAgICAgIC8vIGFuZCBjYWxsIGl0cyB1bnN1YnNjcmliZSgpXG4gICAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpc1trZXldO1xuICAgICAgICBpZiAocHJvcGVydHlcbiAgICAgICAgICYmICghKHByb3BlcnR5IGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSlcbiAgICAgICAgICYmICh0eXBlb2YgcHJvcGVydHkudW5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAmJiAoYmxhY2tsaXN0LmluZGV4T2Yoa2V5KSA9PT0gLTEpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJyVjIEBBdXRvVW5zdWJzY3JpYmUoKScsICdjb2xvcjogZ3JheScsIGB0byAke2tleX1gKTtcbiAgICAgICAgICBwcm9wZXJ0eS51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIHRoZW4sIGV4ZWN1dGUgdGhlIG9yaWdpbmFsIG5nT25EZXN0cm95XG4gICAgICBpZiAob3JpZ2luYWxcbiAgICAgICAmJiAodHlwZW9mIG9yaWdpbmFsID09PSAnZnVuY3Rpb24nKSlcbiAgICAgICAgb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG59XG4iXX0=