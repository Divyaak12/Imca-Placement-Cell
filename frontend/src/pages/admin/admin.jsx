import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css"; // Create this CSS file

const Admin = () => {
    const [adminName, setAdminName] = useState("");

    useEffect(() => {
        // Simulate login - or fetch from localStorage
        const storedName = localStorage.getItem("adminName") || "Admin";
        setAdminName(storedName);
    }, []);

    return (
    <div className="admin-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Placement Admin</h2>
        <div className="admin-info">
          <strong>Welcome, </strong>
          {adminName}
        </div>

        <nav className="admin-nav">
          <Link to="/admin/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
          <Link to="/admin/students"><i className="fas fa-user-graduate"></i> Manage Students</Link>
          <Link to="/admin/students"><i className="fa-solid fa-business-time"></i> Internship</Link>
          <Link to="/admin/companies"><i className="fas fa-building"></i> Manage Companies</Link>
          <Link to="/admin/applications"><i className="fas fa-clipboard-check"></i> Applications</Link>
          <Link to="/admin/interviews"><i className="fas fa-comments"></i> Interviews</Link>
          <Link to="/admin/reports"><i className="fas fa-chart-line"></i> Reports</Link>
        </nav>

        <div className="admin-bottom">
          <Link to="/admin/settings"><i className="fas fa-cog"></i> Settings</Link>
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("adminName");
              localStorage.removeItem("isAdminLoggedIn");
            }}
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the Placement Cell Admin Panel.</p>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Students</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Registered Companies</h3>
            <p>35</p>
          </div>
          <div className="card">
            <h3>Applications Submitted</h3>
            <p>540</p>
          </div>
          <div className="card">
            <h3>Interviews Scheduled</h3>
            <p>24</p>
          </div>
        </div>
      </main >
    </div >
  );
};

export default Admin;
