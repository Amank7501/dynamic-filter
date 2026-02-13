export function getValue(obj: any, path: string) {
    return path.split(".").reduce((o, k) => o?.[k], obj);
}

export function applyFilters(data: any[], filters: any[]) {
    return data.filter(row =>
        filters.every(f => {
            const val = getValue(row, f.field);

            switch (f.operator) {
                case "contains":
                    return val?.toLowerCase().includes(f.value.toLowerCase());

                case "equals":
                    return val == f.value;

                case "gt":
                    return val > f.value;

                case "lt":
                    return val < f.value;

                case "between":
                    return val >= f.value[0] && val <= f.value[1];

                case "is":
                    return val === f.value;

                case "in":
                    return f.value.some((v: string) => val.includes(v));

                default:
                    return true;
            }
        })
    );
}
