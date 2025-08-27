import React, { useState } from "react";
import "./FilterBar.css";
import MyApplications from "./MyApplications";

export default function FilterBar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    search: "",
    category: "All Categories",
    stipend: "All Ranges",
    location: "All Locations",
    remoteOnly: false,
  });

  const [activeTab, setActiveTab] = useState("internships");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedFilters = {
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div>
      {/* Tabs Section */}
      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "internships" ? "active" : ""}`}
          onClick={() => setActiveTab("internships")}
        >
          📄 Available Internships
        </button>
        <button
          className={`tab-btn ${activeTab === "applications" ? "active" : ""}`}
          onClick={() => setActiveTab("applications")}
        >
          👤 My Applications (3)
        </button>
      </div>

      {/* Filter Section (Internships Tab) */}
      {activeTab === "internships" && (
        <div className="filter-bar">
          <div className="filter-group">
            <label>Search</label>
            <input
              type="text"
              name="search"
              placeholder="Search companies, roles, or locations..."
              value={filters.search}
              onChange={handleChange}
            />
          </div>

          <div className="filter-group">
            <label>Category</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
            >
              <option>All Categories</option>
              <option>IT</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Design</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Stipend Range</label>
            <select
              name="stipend"
              value={filters.stipend}
              onChange={handleChange}
            >
              <option>All Ranges</option>
              <option>₹10,000 - ₹15,000</option>
              <option>₹15,000 - ₹20,000</option>
              <option>₹20,000+</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Location</label>
            <select
              name="location"
              value={filters.location}
              onChange={handleChange}
            >
              <option>All Locations</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="filter-group toggle">
            <label>
              <input
                type="checkbox"
                name="remoteOnly"
                checked={filters.remoteOnly}
                onChange={handleChange}
              />
              Remote Only
            </label>
          </div>
        </div>
      )}

      {/* Applications Tab */}
      {activeTab === "applications" && <MyApplications />}
    </div>
  );
}
