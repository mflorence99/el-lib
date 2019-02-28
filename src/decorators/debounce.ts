/**
 * Better debounce as a decorator
 * 
 * @see https://stackoverflow.com/questions/44634992
 */

export function Debounce(delay = 0): MethodDecorator {
  return function (target: any,
                   propertyKey: string,
                   descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
      clearTimeout(this.__timeout);
      this.__timeout = setTimeout(() => original.apply(this, args), delay);
    };
    return descriptor;
  };
}
