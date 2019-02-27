/**
 * Better debounce as a decorator
 * 
 * @see https://stackoverflow.com/questions/44634992
 */

export function Debounce(delay = 100): MethodDecorator {
  return function (target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor) {
    let timeout = null;
    const original = descriptor.value;
    descriptor.value = function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => original.apply(this, args), delay);
    };
    return descriptor;
  };
}
