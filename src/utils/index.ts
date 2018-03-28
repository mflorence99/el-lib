/**
 * Common utility functions
 */

/**
 * Simple debounce; useful when no stream is at play
 */
export function debounce(func: Function,
                         wait = 0,
                         immediate = false): Function {
  let timeout = null;
  return function() {
    const context = this;
    const args = arguments;
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
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
export function deepCopy<T>(obj: T): T {
  return <T>JSON.parse(JSON.stringify(obj));
}

/**
 * Decode a key that was used in a route
 *
 * NOTE: we need characters that are NOT URL encoded
 */
export function decodeRoute(key: string): string {
  return atob(key.replace(/_/g, '='));
}

/**
 * Encode a key so it can be used in a route
 *
 * NOTE: we need characters that are NOT URL encoded
 */
export function encodeRoute(key: string): string {
  return btoa(key).replace(/=/g, '_');
}

/**
 * Is this object empty?
 */
export function isObjectEmpty(obj: any): boolean {
    return (Object.getOwnPropertyNames(obj).length === 0);
}

/**
 * Run code on next tick
 */
export function nextTick(f: Function): void {
  setTimeout(f, 0);
}

/**
 * Simple map reversal
 */
export function reverseMap(obj: any): any {
  return Object.keys(obj).reduce((acc, k) => {
    acc[String(obj[k])] = k;
    return acc;
  }, {});
}
