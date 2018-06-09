/* tslint:disable:no-empty */
export function get<T>(exp: () => T, d: T) {
    try {
        const val = exp();
        if (val != null) {
            return val;
        }
    } catch (ex) { }

    return d;
}
