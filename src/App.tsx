import { useState } from "react";
import { employees } from "./data/employees";
import FilterBuilder from "./components/FilterBuilder";
import DataTable from "./components/DataTable";
import { applyFilters } from "./utils/filterEngine";

function App() {
  const [filtered, setFiltered] = useState(employees);

  return (
    <>
      <FilterBuilder onChange={(f: any) => setFiltered(applyFilters(employees, f))} />
      <DataTable data={filtered} />
    </>
  );
}

export default App;
