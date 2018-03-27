import { Pipe } from '@angular/core';
/**
 * Converts text where < and > are encoded as &lt; and &gt; into real HTML.
 *
 * NOTE: must pipe into [innerHTML]
 */
var HTMLifyPipe = /** @class */ (function () {
    function HTMLifyPipe() {
    }
    HTMLifyPipe.prototype.transform = function (s, dflt) {
        if (dflt === void 0) { dflt = ''; }
        if (s == null)
            return dflt;
        else
            return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    };
    HTMLifyPipe.decorators = [
        { type: Pipe, args: [{ name: 'libHTMLify' },] },
    ];
    /** @nocollapse */
    HTMLifyPipe.ctorParameters = function () { return []; };
    return HTMLifyPipe;
}());
export { HTMLifyPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbGlmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXBlcy9odG1saWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUFhbEQsK0JBQVMsR0FBVCxVQUFVLENBQVMsRUFDVCxJQUFTO1FBQVQscUJBQUEsRUFBQSxTQUFTO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsSUFBSTtZQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFEOztnQkFURixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFOzs7O3NCQVQ1Qjs7U0FXYSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0ZXh0IHdoZXJlIDwgYW5kID4gYXJlIGVuY29kZWQgYXMgJmx0OyBhbmQgJmd0OyBpbnRvIHJlYWwgSFRNTC5cclxuICpcclxuICogTk9URTogbXVzdCBwaXBlIGludG8gW2lubmVySFRNTF1cclxuICovXHJcblxyXG5AUGlwZSh7IG5hbWU6ICdsaWJIVE1MaWZ5JyB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhUTUxpZnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybShzOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRmbHQgPSAnJyk6IHN0cmluZyB7XHJcbiAgIGlmIChzID09IG51bGwpXHJcbiAgICAgcmV0dXJuIGRmbHQ7XHJcbiAgIGVsc2UgcmV0dXJuIHMucmVwbGFjZSgvJmx0Oy9nLCAnPCcpLnJlcGxhY2UoLyZndDsvZywgJz4nKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==