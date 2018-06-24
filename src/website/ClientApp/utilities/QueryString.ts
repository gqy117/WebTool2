import { Search } from "history";
import * as queryString from "query-string";

export function toObject(oldQuery: any, param: Search) {
    const queryFromUrl = queryString.parse(param);

    for (const fieldName of Object.keys(oldQuery)) {
        const oldValue = oldQuery[fieldName];
        const oldType = typeof(oldValue);
        const newValue = queryFromUrl[fieldName];
        const newType = typeof(newValue);

        if (newValue) {
            if (oldType === newType) {
                oldQuery[fieldName] = newValue;
            } else {
                switch (oldType) {
                    case "number":
                        oldQuery[fieldName] = Number(newValue);
                        break;
                    case "boolean":
                        oldQuery[fieldName] = Boolean(newValue);
                        break;
                }
            }
        }
    }
}
