import { Pipe } from '@angular/core';
/**
 * Converts substrings that look like URLs into <a href="...">...</a> sequences.
 *
 * NOTE: must pipe into [innerHTML]
 */
var LinkifyPipe = /** @class */ (function () {
    function LinkifyPipe() {
    }
    LinkifyPipe.prototype.transform = function (s, dflt) {
        if (dflt === void 0) { dflt = ''; }
        // quick exit if empty string
        if (s == null)
            return dflt;
        // URLs starting with http://, https://, or ftp://
        var p1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
        s = s.replace(p1, '<a href="$1" target="_blank">$1</a>');
        // URLs starting with "www." (without // before it, or it'd re-link the ones done above)
        var p2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        s = s.replace(p2, '$1<a href="http://$2" target="_blank">$2</a>');
        // change email addresses to mailto: links
        var p3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
        s = s.replace(p3, '<a href="mailto:$1">$1</a>');
        return s;
    };
    LinkifyPipe.decorators = [
        { type: Pipe, args: [{ name: 'libLinkify' },] },
    ];
    /** @nocollapse */
    LinkifyPipe.ctorParameters = function () { return []; };
    return LinkifyPipe;
}());
export { LinkifyPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2lmeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waXBlcy9saW5raWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUFhbEQsK0JBQVMsR0FBVCxVQUFVLENBQVMsRUFDVCxJQUFTO1FBQVQscUJBQUEsRUFBQSxTQUFTOztRQUdqQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQzs7UUFHZCxJQUFNLEVBQUUsR0FBRyx5RUFBeUUsQ0FBQztRQUNyRixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUscUNBQXFDLENBQUMsQ0FBQzs7UUFHekQsSUFBTSxFQUFFLEdBQUcsZ0NBQWdDLENBQUM7UUFDNUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLDhDQUE4QyxDQUFDLENBQUM7O1FBR2xFLElBQU0sRUFBRSxHQUFHLDBEQUEwRCxDQUFDO1FBQ3RFLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBRWhELE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FFVjs7Z0JBekJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7Ozs7c0JBVDVCOztTQVdhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHN1YnN0cmluZ3MgdGhhdCBsb29rIGxpa2UgVVJMcyBpbnRvIDxhIGhyZWY9XCIuLi5cIj4uLi48L2E+IHNlcXVlbmNlcy5cclxuICpcclxuICogTk9URTogbXVzdCBwaXBlIGludG8gW2lubmVySFRNTF1cclxuICovXHJcblxyXG5AUGlwZSh7IG5hbWU6ICdsaWJMaW5raWZ5JyB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpbmtpZnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybShzOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIGRmbHQgPSAnJyk6IHN0cmluZyB7XHJcblxyXG4gICAgLy8gcXVpY2sgZXhpdCBpZiBlbXB0eSBzdHJpbmdcclxuICAgIGlmIChzID09IG51bGwpXHJcbiAgICAgIHJldHVybiBkZmx0O1xyXG5cclxuICAgIC8vIFVSTHMgc3RhcnRpbmcgd2l0aCBodHRwOi8vLCBodHRwczovLywgb3IgZnRwOi8vXHJcbiAgICBjb25zdCBwMSA9IC8oXFxiKGh0dHBzP3xmdHApOlxcL1xcL1stQS1aMC05KyZAI1xcLyU/PX5ffCE6LC47XSpbLUEtWjAtOSsmQCNcXC8lPX5ffF0pL2dpbTtcclxuICAgIHMgPSBzLnJlcGxhY2UocDEsICc8YSBocmVmPVwiJDFcIiB0YXJnZXQ9XCJfYmxhbmtcIj4kMTwvYT4nKTtcclxuXHJcbiAgICAvLyBVUkxzIHN0YXJ0aW5nIHdpdGggXCJ3d3cuXCIgKHdpdGhvdXQgLy8gYmVmb3JlIGl0LCBvciBpdCdkIHJlLWxpbmsgdGhlIG9uZXMgZG9uZSBhYm92ZSlcclxuICAgIGNvbnN0IHAyID0gLyhefFteXFwvXSkod3d3XFwuW1xcU10rKFxcYnwkKSkvZ2ltO1xyXG4gICAgcyA9IHMucmVwbGFjZShwMiwgJyQxPGEgaHJlZj1cImh0dHA6Ly8kMlwiIHRhcmdldD1cIl9ibGFua1wiPiQyPC9hPicpO1xyXG5cclxuICAgIC8vIGNoYW5nZSBlbWFpbCBhZGRyZXNzZXMgdG8gbWFpbHRvOiBsaW5rc1xyXG4gICAgY29uc3QgcDMgPSAvKChbYS16QS1aMC05XFwtXFxfXFwuXSkrQFthLXpBLVpcXF9dKz8oXFwuW2EtekEtWl17Miw2fSkrKS9naW07XHJcbiAgICBzID0gcy5yZXBsYWNlKHAzLCAnPGEgaHJlZj1cIm1haWx0bzokMVwiPiQxPC9hPicpO1xyXG5cclxuICAgIHJldHVybiBzO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==