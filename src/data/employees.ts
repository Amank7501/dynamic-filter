export interface Employee {
    id: number;
    name: string;
    email: string;
    department: string;
    salary: number;
    joinDate: string;
    isActive: boolean;
    skills: string[];
    address: {
        city: string;
    };
}

export const employees: Employee[] = Array.from({ length: 50 }).map((_, i) => ({
    id: i + 1,
    name: `User ${i}`,
    email: `user${i}@mail.com`,
    department: i % 2 ? "Engineering" : "HR",
    salary: 50000 + i * 1000,
    joinDate: "2022-01-01",
    isActive: i % 2 === 0,
    skills: ["React", "Node"],
    address: {
        city: i % 2 ? "Delhi" : "Mumbai"
    }
}));
