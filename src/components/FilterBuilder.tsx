import { useState } from "react";
import { Button } from "@mui/material";
import FilterRow from "./FilterRow";
import { v4 as uuid } from "uuid";

export default function FilterBuilder({ onChange }: any) {
    const [filters, setFilters] = useState<any[]>([]);

    function add() {
        setFilters([...filters, { id: uuid(), field: "name", operator: "contains", value: "" }]);
    }

    function update(id: string, key: string, val: any) {
        setFilters(f => f.map(x => x.id === id ? { ...x, [key]: val } : x));
    }

    return (
        <>
            {filters.map(f => (
                <FilterRow
                    key={f.id}
                    filter={f}
                    update={(k: any, v: any) => update(f.id, k, v)}
                    remove={() => setFilters(filters.filter(x => x.id !== f.id))}
                />
            ))}

            <Button onClick={add}>Add Filter</Button>
            <Button onClick={() => onChange(filters)}>Apply</Button>
        </>
    );
}
