export const fields = [
    { key: "name", label: "Name", type: "text" },
    { key: "salary", label: "Salary", type: "number" },
    { key: "joinDate", label: "Join Date", type: "date" },
    { key: "isActive", label: "Active", type: "boolean" },
    { key: "department", label: "Department", type: "single", options: ["HR", "Engineering"] },
    { key: "skills", label: "Skills", type: "multi", options: ["React", "Node"] },
    { key: "address.city", label: "City", type: "text" }
];
