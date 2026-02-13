export type FieldType =
    | "text"
    | "number"
    | "date"
    | "boolean"
    | "single"
    | "multi";

export interface FilterCondition {
    id: string;
    field: string;
    type: FieldType;
    operator: string;
    value: any;
}
