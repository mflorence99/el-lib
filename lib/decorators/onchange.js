/**
 * Decorator to simplify OnChanges handling
 */
export function OnChange() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    /**
       * Create ngOnChanges
       */
    function init(ctor, method) {
        var ngOnChanges = ctor.prototype.ngOnChanges;
        ctor.prototype.ngOnChanges = function () {
            // what changed?
            var changes = arguments[0];
            var changed = inputs.map(function (input) { return changes[input] != null; });
            // if anything changed, call handler
            if (changed.some(function (item) { return item; }))
                method.apply(this, changed);
            // execute the original ngOnChanges
            if (ngOnChanges
                && (typeof ngOnChanges === 'function'))
                ngOnChanges.apply(this, arguments);
        };
    }
    /**
       * Decorator itself
       */
    return function (target, propertyKey, descriptor) {
        var ctor = target['constructor'];
        init(ctor, descriptor.value);
        return descriptor;
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25jaGFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGVjb3JhdG9ycy9vbmNoYW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNQSxNQUFNO0lBQW1CLGdCQUFtQjtTQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7UUFBbkIsMkJBQW1COzs7OztJQU0xQyxjQUFjLElBQUksRUFBRSxNQUFNO1FBQ3hCLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHOztZQUUzQixJQUFNLE9BQU8sR0FBa0IsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQU0sT0FBTyxHQUFjLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUF0QixDQUFzQixDQUFDLENBQUM7O1lBRXZFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztZQUUvQixFQUFFLENBQUMsQ0FBQyxXQUFXO21CQUNYLENBQUMsT0FBTyxXQUFXLEtBQUssVUFBVSxDQUFDLENBQUM7Z0JBQ3RDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3RDLENBQUM7S0FDSDs7OztJQU1ELE1BQU0sQ0FBQyxVQUFTLE1BQWMsRUFDZCxXQUFtQixFQUNuQixVQUF3QztRQUN0RCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQztLQUNuQixDQUFDO0NBRUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRGVjb3JhdG9yIHRvIHNpbXBsaWZ5IE9uQ2hhbmdlcyBoYW5kbGluZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBPbkNoYW5nZSguLi5pbnB1dHM6IHN0cmluZ1tdKSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZ09uQ2hhbmdlc1xuICAgKi9cblxuICBmdW5jdGlvbiBpbml0KGN0b3IsIG1ldGhvZCkge1xuICAgIGNvbnN0IG5nT25DaGFuZ2VzID0gY3Rvci5wcm90b3R5cGUubmdPbkNoYW5nZXM7XG4gICAgY3Rvci5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyB3aGF0IGNoYW5nZWQ/XG4gICAgICBjb25zdCBjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzID0gYXJndW1lbnRzWzBdO1xuICAgICAgY29uc3QgY2hhbmdlZDogYm9vbGVhbltdID0gaW5wdXRzLm1hcChpbnB1dCA9PiBjaGFuZ2VzW2lucHV0XSAhPSBudWxsKTtcbiAgICAgIC8vIGlmIGFueXRoaW5nIGNoYW5nZWQsIGNhbGwgaGFuZGxlclxuICAgICAgaWYgKGNoYW5nZWQuc29tZShpdGVtID0+IGl0ZW0pKVxuICAgICAgICAgbWV0aG9kLmFwcGx5KHRoaXMsIGNoYW5nZWQpO1xuICAgICAgLy8gZXhlY3V0ZSB0aGUgb3JpZ2luYWwgbmdPbkNoYW5nZXNcbiAgICAgIGlmIChuZ09uQ2hhbmdlc1xuICAgICAgICYmICh0eXBlb2YgbmdPbkNoYW5nZXMgPT09ICdmdW5jdGlvbicpKVxuICAgICAgICBuZ09uQ2hhbmdlcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGVjb3JhdG9yIGl0c2VsZlxuICAgKi9cblxuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBPYmplY3QsXG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvcjogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8YW55Pik6IGFueSB7XG4gICAgY29uc3QgY3RvciA9IHRhcmdldFsnY29uc3RydWN0b3InXTtcbiAgICBpbml0KGN0b3IsIGRlc2NyaXB0b3IudmFsdWUpO1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xuXG59XG4iXX0=