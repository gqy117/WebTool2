export interface KeyValuePair<T> {
    k: string | number;
    v: T;
}

export class Dictionary<T>  {
    [key: string]: T;

    constructor(init: Array<KeyValuePair<T>>) {
        for (const row of init) {
            this[row.k] = row.v;
        }
    }
}
