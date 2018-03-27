import { Component, ViewChild } from '@angular/core';
/** Markdown component */
var MarkdownComponent = /** @class */ (function () {
    function MarkdownComponent() {
    }
    // lifecycle methods
    // lifecycle methods
    MarkdownComponent.prototype.ngAfterViewInit = 
    // lifecycle methods
    function () {
        var el = this.markdown.nativeElement;
        el.innerHTML = marked(el.innerText);
    };
    MarkdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-markdown',
                    styles: ["\n    :host {\n      display: block;\n    }\n  "],
                    template: "\n    <div\n      class=\"content\"\n      #markdown>\n      <ng-content></ng-content>\n    </div>"
                },] },
    ];
    /** @nocollapse */
    MarkdownComponent.ctorParameters = function () { return []; };
    MarkdownComponent.propDecorators = {
        "markdown": [{ type: ViewChild, args: ['markdown',] },],
    };
    return MarkdownComponent;
}());
export { MarkdownComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9tYXJrZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lBeUJsRSxvQkFBb0I7O0lBRXBCLDJDQUFlOztJQUFmO1FBQ0UsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDdkMsRUFBRSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3JDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixNQUFNLEVBQUUsQ0FBQyxpREFJUixDQUFDO29CQUNGLFFBQVEsRUFBRSxvR0FLRDtpQkFDVjs7Ozs7NkJBSUUsU0FBUyxTQUFDLFVBQVU7OzRCQXZCdkI7O1NBcUJhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgdmFyIG1hcmtlZDogYW55O1xuXG4vKiogTWFya2Rvd24gY29tcG9uZW50ICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1tYXJrZG93bicsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiY29udGVudFwiXG4gICAgICAjbWFya2Rvd24+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+YFxufSlcblxuZXhwb3J0IGNsYXNzIE1hcmtkb3duQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuXG4gIEBWaWV3Q2hpbGQoJ21hcmtkb3duJykgbWFya2Rvd247XG5cbiAgLy8gbGlmZWN5Y2xlIG1ldGhvZHNcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLm1hcmtkb3duLm5hdGl2ZUVsZW1lbnQ7XG4gICAgZWwuaW5uZXJIVE1MID0gbWFya2VkKGVsLmlubmVyVGV4dCk7XG4gIH1cblxufVxuIl19