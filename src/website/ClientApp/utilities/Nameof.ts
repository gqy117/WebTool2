/* tslint:disable:ban-types */
export function Nameof(propertyFunction: Function): string {
    const functionName: string = propertyFunction.toString();

    return (/\.([^\.;]+);?\s*\}$/.exec(functionName) as string[])[1];
}
