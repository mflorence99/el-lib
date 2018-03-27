/**
 * Decorator to automatically unsubscribe from anything that's subscribable
 * when a component is destroyed.
 *
 * https://github.com/NetanelBasal/ngx-auto-unsubscribe
 *  /blob/master/dist/ngx-auto-unsubscribe.js
 */
export declare function AutoUnsubscribe(blacklist?: string[]): (ctor: Function) => void;
