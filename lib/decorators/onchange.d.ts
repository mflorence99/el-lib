/**
 * Decorator to simplify OnChanges handling
 */
export declare function OnChange(...inputs: string[]): (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => any;
