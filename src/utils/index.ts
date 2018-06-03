import { I18nPluralPipe, NgLocaleLocalization, formatDate as angularFormatDate } from '@angular/common';

import { e2a } from './convert';

export * from './convert';

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
 * Dump buffer
 */
export function dump(data: Uint8Array,
                     title: string,
                     ebcdic = false,
                     color = 'blue'): void {
  const sliceSize = 32;
  let offset = 0;
  const total = data.length;
  console.groupCollapsed(`%c${title} ${ebcdic? '(EBCDIC-encoded)' : ''}`, `color: ${color}`);
  console.log('%c      00       04       08       0c       10       14       18       1c        00  04  08  0c  10  14  18  1c  ', 'font-weight: bold');
  while (true) {
    const slice = new Uint8Array(data.slice(offset, Math.min(offset + sliceSize, total)));
    const {hex, str} = dumpSlice(slice, sliceSize, ebcdic);
    console.log(`%c${toHex(offset, 4)}: %c${hex} %c${str}`, 'font-weight: bold', 'color: black', 'color: grey');
    // setup for next time
    if (slice.length < sliceSize)
      break;
    offset += sliceSize;
  }
  console.groupEnd();
}

function dumpSlice(bytes: Uint8Array,
                   sliceSize: number,
                   ebcdic: boolean): {hex, str} {
  let hex = '';
  let str = '';
  let ix = 0;
  // decode to hex and string equiv
  for (; ix < bytes.length; ix++) {
    const byte = bytes[ix];
    hex += `${toHex(byte, 2)}`;
    const char = ebcdic? e2a([byte]) : String.fromCharCode(byte);
    // NOTE: use special character in string as a visual aid to counting
    str += ((char === '\u00a0') || (char === ' '))? '\u2022' : char;
    if ((ix > 0) && ((ix % 4) === 3))
      hex += ' ';
  }
  // pad remainder of slice
  for (; ix < sliceSize; ix++) {
    hex += '  ';
    str += ' ';
    if ((ix > 0) && ((ix % 4) === 3))
      hex += ' ';
  }
  return {hex, str};
}

/**
 * Format a date
 *
 * TODO: localization other than en-US
 */
export function formatDate(date: Date,
                           fmt: string): string {
  return angularFormatDate(date, fmt, 'en-US');
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
  setImmediate(f);
}

/**
 * Pluralize a number into a string
 *
 * TODO: localization other than en-US
 */
export function pluralize(num: number,
                          mapping: {[k: string]: string}): string {
  return new I18nPluralPipe(new NgLocaleLocalization('en-US'))
    .transform(num, mapping);
}

/**
 * Simple map reversal
 */
export function reverseMap(obj: any): any {
  return Object.keys(obj).reduce((acc, k) => {
    acc[String(obj[k])] = k;
    return acc;
  }, { });
}

/**
 * Convert to hex, with padding
 */
export function toHex(num: number,
                      pad: number): string {
  const padding = '0000000000000000'.substring(0, pad);
  const hex = num.toString(16);
  return padding.substring(0, padding.length - hex.length) + hex;
}
