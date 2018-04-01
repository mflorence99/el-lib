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
 * Dump buffer
 */
export declare function dump(data: Uint8Array, title: string, ebcdic?: boolean, color?: string): void;
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
/**
 * Convert to hex, with padding
 */
export declare function toHex(num: number, pad: number): string;
