/**
 * Common utility functions
 */
/**
 * Simple debounce; useful when no stream is at play
 */
export function debounce(func, wait, immediate) {
    if (wait === void 0) { wait = 0; }
    if (immediate === void 0) { immediate = false; }
    var timeout = null;
    return function () {
        var context = this;
        var args = arguments;
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        }, wait);
        if (callNow)
            func.apply(context, args);
    };
}
/**
 * Deep copy an object, albeit not terribly efficiently
 */
export function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * Decode a key that was used in a route
 *
 * NOTE: we need characters that are NOT URL encoded
 */
export function decodeRoute(key) {
    return atob(key.replace(/_/g, '='));
}
/**
 * Encode a key so it can be used in a route
 *
 * NOTE: we need characters that are NOT URL encoded
 */
export function encodeRoute(key) {
    return btoa(key).replace(/=/g, '_');
}
/**
 * Is this object empty?
 */
export function isObjectEmpty(obj) {
    return (Object.getOwnPropertyNames(obj).length === 0);
}
/**
 * Run code on next tick
 */
export function nextTick(f) {
    setTimeout(f, 0);
}
/**
 * Simple map reversal
 */
export function reverseMap(obj) {
    return Object.keys(obj).reduce(function (acc, k) {
        acc[String(obj[k])] = k;
        return acc;
    }, {});
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0EsTUFBTSxtQkFBbUIsSUFBYyxFQUNkLElBQVEsRUFDUixTQUFpQjtJQURqQixxQkFBQSxFQUFBLFFBQVE7SUFDUiwwQkFBQSxFQUFBLGlCQUFpQjtJQUN4QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkIsTUFBTSxDQUFDO1FBQ0wsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN2QixJQUFNLE9BQU8sR0FBRyxTQUFTLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDbkIsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNmLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM3QixDQUFDO0NBQ0g7Ozs7QUFLRCxNQUFNLG1CQUFzQixHQUFNO0lBQ2hDLE1BQU0sQ0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUMzQzs7Ozs7O0FBT0QsTUFBTSxzQkFBc0IsR0FBVztJQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDckM7Ozs7OztBQU9ELE1BQU0sc0JBQXNCLEdBQVc7SUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQ3JDOzs7O0FBS0QsTUFBTSx3QkFBd0IsR0FBUTtJQUNsQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQ3pEOzs7O0FBS0QsTUFBTSxtQkFBbUIsQ0FBVztJQUNsQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ2xCOzs7O0FBS0QsTUFBTSxxQkFBcUIsR0FBUTtJQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDWixFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbW1vbiB1dGlsaXR5IGZ1bmN0aW9uc1xuICovXG5cbi8qKlxuICogU2ltcGxlIGRlYm91bmNlOyB1c2VmdWwgd2hlbiBubyBzdHJlYW0gaXMgYXQgcGxheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYzogRnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgd2FpdCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgaW1tZWRpYXRlID0gZmFsc2UpOiBGdW5jdGlvbiB7XG4gIGxldCB0aW1lb3V0ID0gbnVsbDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKVxuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH0sIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KVxuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBEZWVwIGNvcHkgYW4gb2JqZWN0LCBhbGJlaXQgbm90IHRlcnJpYmx5IGVmZmljaWVudGx5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weTxUPihvYmo6IFQpOiBUIHtcbiAgcmV0dXJuIDxUPkpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbi8qKlxuICogRGVjb2RlIGEga2V5IHRoYXQgd2FzIHVzZWQgaW4gYSByb3V0ZVxuICpcbiAqIE5PVEU6IHdlIG5lZWQgY2hhcmFjdGVycyB0aGF0IGFyZSBOT1QgVVJMIGVuY29kZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVJvdXRlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGF0b2Ioa2V5LnJlcGxhY2UoL18vZywgJz0nKSk7XG59XG5cbi8qKlxuICogRW5jb2RlIGEga2V5IHNvIGl0IGNhbiBiZSB1c2VkIGluIGEgcm91dGVcbiAqXG4gKiBOT1RFOiB3ZSBuZWVkIGNoYXJhY3RlcnMgdGhhdCBhcmUgTk9UIFVSTCBlbmNvZGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVSb3V0ZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBidG9hKGtleSkucmVwbGFjZSgvPS9nLCAnXycpO1xufVxuXG4vKipcbiAqIElzIHRoaXMgb2JqZWN0IGVtcHR5P1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3RFbXB0eShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggPT09IDApO1xufVxuXG4vKipcbiAqIFJ1biBjb2RlIG9uIG5leHQgdGlja1xuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dFRpY2soZjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgc2V0VGltZW91dChmLCAwKTtcbn1cblxuLyoqXG4gKiBTaW1wbGUgbWFwIHJldmVyc2FsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlTWFwKG9iajogYW55KTogYW55IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGspID0+IHtcbiAgICBhY2NbU3RyaW5nKG9ialtrXSldID0gaztcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG4iXX0=