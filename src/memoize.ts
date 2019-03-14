const memoizeFn = require('lodash.memoize');

export function memo(resolver?) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = memoizeFn(descriptor.value, resolver);
    return descriptor;
  };
}
