import { Select, MenuItem, IconButton } from "@mui/material";
import { Trash } from "lucide-react";
import DynamicInput from "./DynamicInput";
import { fields } from "../config/fields";

export default function FilterRow({ filter, update, remove }: any) {
    const field = fields.find(f => f.key === filter.field);

    return (
        <>
            <Select value={filter.field} onChange={e => update("field", e.target.value)}>
                {fields.map(f => (
                    <MenuItem key={f.key} value={f.key}>{f.label}</MenuItem>
                ))}
            </Select>

            <DynamicInput
                type={field?.type}
                options={field?.options}
                value={filter.value}
                onChange={(v: any) => update("value", v)}
            />

            <IconButton onClick={remove}><Trash size={16} /></IconButton>
        </>
    );
}
