import { TextField, Checkbox, Select, MenuItem } from "@mui/material";

export default function DynamicInput({ type, value, onChange, options }: any) {
    if (type === "boolean")
        return <Checkbox checked={value} onChange={e => onChange(e.target.checked)} />;

    if (type === "single")
        return (
            <Select value={value} onChange={e => onChange(e.target.value)}>
                {options.map((o: string) => (
                    <MenuItem key={o} value={o}>{o}</MenuItem>
                ))}
            </Select>
        );

    return <TextField value={value} onChange={e => onChange(e.target.value)} />;
}
