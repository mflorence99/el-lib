/**
 * The whole point of this mess is to defeat the AOT compiler and make our
 * custom directives work: @AutoUnsubscribe and @OnChange
 *
 * @see @lucato https://github.com/angular/angular/issues/16023
 */
var /**
 * The whole point of this mess is to defeat the AOT compiler and make our
 * custom directives work: @AutoUnsubscribe and @OnChange
 *
 * @see @lucato https://github.com/angular/angular/issues/16023
 */
LifecycleComponent = /** @class */ (function () {
    function LifecycleComponent() {
    }
    LifecycleComponent.prototype.ngAfterViewInit = function () { };
    LifecycleComponent.prototype.ngOnChanges = function (changes) { };
    LifecycleComponent.prototype.ngOnDestroy = function () { };
    LifecycleComponent.prototype.ngOnInit = function () { };
    return LifecycleComponent;
}());
/**
 * The whole point of this mess is to defeat the AOT compiler and make our
 * custom directives work: @AutoUnsubscribe and @OnChange
 *
 * @see @lucato https://github.com/angular/angular/issues/16023
 */
export { LifecycleComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvbGlmZWN5Y2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVNBOzs7Ozs7QUFBQTs7O0lBR0UsNENBQWUsR0FBZixlQUFxQjtJQUVyQix3Q0FBVyxHQUFYLFVBQVksT0FBc0IsS0FBSztJQUV2Qyx3Q0FBVyxHQUFYLGVBQWlCO0lBRWpCLHFDQUFRLEdBQVIsZUFBYzs2QkFsQmhCO0lBb0JDLENBQUE7Ozs7Ozs7QUFYRCw4QkFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGUgd2hvbGUgcG9pbnQgb2YgdGhpcyBtZXNzIGlzIHRvIGRlZmVhdCB0aGUgQU9UIGNvbXBpbGVyIGFuZCBtYWtlIG91clxuICogY3VzdG9tIGRpcmVjdGl2ZXMgd29yazogQEF1dG9VbnN1YnNjcmliZSBhbmQgQE9uQ2hhbmdlXG4gKlxuICogQHNlZSBAbHVjYXRvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE2MDIzXG4gKi9cblxuZXhwb3J0IGNsYXNzIExpZmVjeWNsZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQge1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHsgfVxuXG4gIG5nT25EZXN0cm95KCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxufVxuIl19