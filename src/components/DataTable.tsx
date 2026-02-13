export default function DataTable({ data }: any) {
    return (
        <table>
            <thead>
                <tr><th>Name</th><th>Salary</th></tr>
            </thead>
            <tbody>
                {data.map((r: any) => (
                    <tr key={r.id}>
                        <td>{r.name}</td>
                        <td>{r.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
