import React, { useState } from "react";
// import Sidebar from "../../components/Sidebar";
import InternshipList from "../../components/InternshipList";
import FilterBar from "../../components/FilterBar";
import "./InternshipPage.css";

export default function InternshipPage() {
  const [filters, setFilters] = useState({});

  return (
    <div className="dashboardcontainer">
      {/* <Sidebar rollNumber="IMCA2024-001" /> */}
      <main className="main-content">
        <h2>Available Internships</h2>
        <FilterBar onFilterChange={setFilters} />
        <InternshipList filters={filters} />
      </main>
    </div>
  );
}