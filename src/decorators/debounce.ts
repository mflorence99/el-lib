/**
 * Better debounce as a decorator
 * 
 * @see https://stackoverflow.com/questions/44634992
 */

export function Debounce(wait = 0,
                         immediate = false): MethodDecorator {
  return function (target: any,
                   propertyKey: string,
                   descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function () {
      let timeout = null;
      const context = this;
      const args = arguments;
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        timeout = null;
        if (!immediate)
          original.apply(context, args);
      }, wait);
      if (callNow)
        original.apply(context, args);
    };
    return descriptor;
  };
}
