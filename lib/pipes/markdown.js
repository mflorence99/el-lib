import { Pipe } from '@angular/core';
/**
 * Pipe wrapper around marked.js
 */
var MarkdownPipe = /** @class */ (function () {
    function MarkdownPipe() {
    }
    MarkdownPipe.prototype.transform = function (md, dflt) {
        if (dflt === void 0) { dflt = ''; }
        return md ? marked(md) : dflt;
    };
    MarkdownPipe.decorators = [
        { type: Pipe, args: [{ name: 'libMarkdown' },] },
    ];
    /** @nocollapse */
    MarkdownPipe.ctorParameters = function () { return []; };
    return MarkdownPipe;
}());
export { MarkdownPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGlwZXMvbWFya2Rvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUFZbEQsZ0NBQVMsR0FBVCxVQUFVLEVBQVUsRUFDVixJQUFTO1FBQVQscUJBQUEsRUFBQSxTQUFTO1FBQ2pCLE1BQU0sQ0FBQyxFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQzlCOztnQkFQRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFOzs7O3VCQVI3Qjs7U0FVYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciBtYXJrZWQ6IGFueTtcblxuLyoqXG4gKiBQaXBlIHdyYXBwZXIgYXJvdW5kIG1hcmtlZC5qc1xuICovXG5cbkBQaXBlKHsgbmFtZTogJ2xpYk1hcmtkb3duJyB9KVxuXG5leHBvcnQgY2xhc3MgTWFya2Rvd25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKG1kOiBzdHJpbmcsXG4gICAgICAgICAgICBkZmx0ID0gJycpOiBzdHJpbmcge1xuICAgIHJldHVybiBtZD8gbWFya2VkKG1kKSA6IGRmbHQ7XG4gIH1cblxufVxuIl19