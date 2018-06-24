export function removeEmptyField(obj: any) {
    for (const fieldName of Object.keys(obj)) {
        const value = obj[fieldName];

        if (!value) {
            delete obj[fieldName];
        }
    }

    return obj;
}
