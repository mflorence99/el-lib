import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { DrawerContainerComponent } from './drawer-container';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Injector } from '@angular/core';
import { Input } from '@angular/core';
/**
 * lib-drawer-panel component
 *
 * Slidable drawer panel, top, right, bottom, left.
 */
var DrawerPanelComponent = /** @class */ (function () {
    /** ctor */
    function DrawerPanelComponent(element, injector) {
        this.element = element;
        this.injector = injector;
        this.position = 'left';
    }
    /** Close drawer */
    /** Close drawer */
    DrawerPanelComponent.prototype.close = /** Close drawer */
    function () {
        if (this.el) {
            switch (this.position) {
                case 'bottom':
                    this.el.style.transform = "translateY(" + this.el.offsetHeight + "px)";
                    break;
                case 'left':
                    this.el.style.transform = "translateX(-" + this.el.offsetWidth + "px)";
                    break;
                case 'right':
                    this.el.style.transform = "translateX(" + this.el.offsetWidth + "px)";
                    break;
                case 'top':
                    this.el.style.transform = "translateY(-" + this.el.offsetHeight + "px)";
                    break;
            }
            // now report as closed
            this.container.closed(this);
        }
    };
    /** Open drawer */
    /** Open drawer */
    DrawerPanelComponent.prototype.open = /** Open drawer */
    function () {
        if (this.el) {
            switch (this.position) {
                case 'left':
                case 'right':
                    this.el.style.transform = "translateX(0px)";
                    break;
                case 'top':
                case 'bottom':
                    this.el.style.transform = "translateY(0px)";
                    break;
            }
            // now report as open
            this.container.opened(this);
        }
    };
    // listeners
    DrawerPanelComponent.prototype.onResize = 
    // listeners
    function () {
        this.setup();
    };
    // lifecycle methods
    // lifecycle methods
    DrawerPanelComponent.prototype.ngAfterViewInit = 
    // lifecycle methods
    function () {
        this.el = this.element.nativeElement;
        this.setup();
    };
    DrawerPanelComponent.prototype.ngOnDestroy = function () {
        // don't assume completely initialized
        if (this.container)
            this.container.drawers[this.position] = null;
    };
    DrawerPanelComponent.prototype.ngOnInit = function () {
        this.container = this.injector.get(DrawerContainerComponent);
        this.container.drawers[this.position] = this;
    };
    // private methods
    // private methods
    DrawerPanelComponent.prototype.setup = 
    // private methods
    function () {
        switch (this.position) {
            case 'bottom':
                this.el.style.left = (this.el.parentElement.offsetWidth - this.el.offsetWidth) / 2 + "px";
                this.el.style.bottom = '0';
                this.el.style.transform = "translateY(" + this.el.offsetHeight + "px)";
                break;
            case 'left':
                this.el.style.height = '100%';
                this.el.style.left = '0';
                this.el.style.top = '0';
                this.el.style.transform = "translateX(-" + this.el.offsetWidth + "px)";
                break;
            case 'right':
                this.el.style.height = '100%';
                this.el.style.right = '0';
                this.el.style.top = '0';
                this.el.style.transform = "translateX(" + this.el.offsetWidth + "px)";
                break;
            case 'top':
                this.el.style.left = (this.el.parentElement.offsetWidth - this.el.offsetWidth) / 2 + "px";
                this.el.style.top = '0';
                this.el.style.transform = "translateY(-" + this.el.offsetHeight + "px)";
                break;
        }
    };
    DrawerPanelComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'lib-drawer-panel',
                    styles: ["\n    :host {\n      display: block;\n      position: absolute;\n      transition: transform 0.5s ease-in-out;\n      transform: translate(-10000px, -10000px);\n      z-index: 100;\n    }\n  "],
                    template: '<ng-content></ng-content>'
                },] },
    ];
    /** @nocollapse */
    DrawerPanelComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Injector, },
    ]; };
    DrawerPanelComponent.propDecorators = {
        "position": [{ type: Input },],
        "onResize": [{ type: HostListener, args: ['window:resize',] },],
    };
    return DrawerPanelComponent;
}());
export { DrawerPanelComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLXBhbmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUErQnBDLFdBQVc7SUFDWCw4QkFBb0IsT0FBbUIsRUFDbkIsUUFBa0I7UUFEbEIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFVO3dCQVBtQixNQUFNO0tBT3BCO0lBRTNDLG1CQUFtQjs7SUFDbkIsb0NBQUs7SUFBTDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUssUUFBUTtvQkFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLFFBQUssQ0FBQztvQkFDcEUsS0FBSyxDQUFDO2dCQUNOLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsaUJBQWUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLFFBQUssQ0FBQztvQkFDcEUs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QUFZLFNBQUMsZUFBZTs7K0JBcEYvQjs7U0FnQ2Esb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhd2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kcmF3ZXItY29udGFpbmVyJztcbmltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIGxpYi1kcmF3ZXItcGFuZWwgY29tcG9uZW50XG4gKlxuICogU2xpZGFibGUgZHJhd2VyIHBhbmVsLCB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQuXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzZWxlY3RvcjogJ2xpYi1kcmF3ZXItcGFuZWwnLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAwMHB4LCAtMTAwMDBweCk7XG4gICAgICB6LWluZGV4OiAxMDA7XG4gICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcblxuZXhwb3J0IGNsYXNzIERyYXdlclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkluaXQge1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcgPSAnbGVmdCc7XG5cbiAgcHJpdmF0ZSBjb250YWluZXI6IERyYXdlckNvbnRhaW5lckNvbXBvbmVudDtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqIGN0b3IgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcikgeyB9XG5cbiAgLyoqIENsb3NlIGRyYXdlciAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgc3dpdGNoICh0aGlzLnBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RoaXMuZWwub2Zmc2V0SGVpZ2h0fXB4KWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RoaXMuZWwub2Zmc2V0V2lkdGh9cHgpYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5lbC5vZmZzZXRXaWR0aH1weClgO1xuICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0ke3RoaXMuZWwub2Zmc2V0SGVpZ2h0fXB4KWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gbm93IHJlcG9ydCBhcyBjbG9zZWRcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsb3NlZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKiogT3BlbiBkcmF3ZXIgKi9cbiAgb3BlbigpIHtcbiAgICBpZiAodGhpcy5lbCkge1xuICAgICAgc3dpdGNoICh0aGlzLnBvc2l0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgwcHgpYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgwcHgpYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBub3cgcmVwb3J0IGFzIG9wZW5cbiAgICAgIHRoaXMuY29udGFpbmVyLm9wZW5lZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvLyBsaXN0ZW5lcnNcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJykgb25SZXNpemUoKSB7XG4gICAgdGhpcy5zZXR1cCgpO1xuICB9XG5cbiAgLy8gbGlmZWN5Y2xlIG1ldGhvZHNcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGRvbid0IGFzc3VtZSBjb21wbGV0ZWx5IGluaXRpYWxpemVkXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKVxuICAgICAgdGhpcy5jb250YWluZXIuZHJhd2Vyc1t0aGlzLnBvc2l0aW9uXSA9IG51bGw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuaW5qZWN0b3IuZ2V0KERyYXdlckNvbnRhaW5lckNvbXBvbmVudCk7XG4gICAgdGhpcy5jb250YWluZXIuZHJhd2Vyc1t0aGlzLnBvc2l0aW9uXSA9IHRoaXM7XG4gIH1cblxuICAvLyBwcml2YXRlIG1ldGhvZHNcblxuICBwcml2YXRlIHNldHVwICgpIHtcbiAgICBzd2l0Y2ggKHRoaXMucG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHRoaXMuZWwuc3R5bGUubGVmdCA9IGAkeyh0aGlzLmVsLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggLSB0aGlzLmVsLm9mZnNldFdpZHRoKSAvIDJ9cHhgO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmJvdHRvbSA9ICcwJztcbiAgICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RoaXMuZWwub2Zmc2V0SGVpZ2h0fXB4KWA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RoaXMuZWwub2Zmc2V0V2lkdGh9cHgpYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnJpZ2h0ID0gJzAnO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RoaXMuZWwub2Zmc2V0V2lkdGh9cHgpYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICB0aGlzLmVsLnN0eWxlLmxlZnQgPSBgJHsodGhpcy5lbC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoIC0gdGhpcy5lbC5vZmZzZXRXaWR0aCkgLyAyfXB4YDtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5lbC5vZmZzZXRIZWlnaHR9cHgpYDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==