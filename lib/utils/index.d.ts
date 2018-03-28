/**
 * Common utility functions
 */
/**
 * Simple debounce; useful when no stream is at play
 */
export declare function debounce(func: Function, wait?: number, immediate?: boolean): Function;
/**
 * Deep copy an object, albeit not terribly efficiently
 */
export declare function deepCopy<T>(obj: T): T;
/**
 * Decode a key that was used in a route
 *
 * NOTE: we need characters that are NOT URL encoded
 */
export declare function decodeRoute(key: string): string;
/**
 * Encode a key so it can be used in a route
 *
 * NOTE: we need characters that are NOT URL encoded
 */
export declare function encodeRoute(key: string): string;
/**
 * Is this object empty?
 */
export declare function isObjectEmpty(obj: any): boolean;
/**
 * Run code on next tick
 */
export declare function nextTick(f: Function): void;
/**
 * Simple map reversal
 */
export declare function reverseMap(obj: any): any;
