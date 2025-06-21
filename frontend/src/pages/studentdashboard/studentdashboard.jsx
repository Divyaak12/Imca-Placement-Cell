import React from "react";
import "./studentdashboard.css";
import { Link, Outlet, useLocation } from "react-router-dom";

const StudentDashboard = () => {
  const location = useLocation();
  const rollNumber = location.state?.rollNumber || "Not Provided";

  return (
    <div className="dashboardcontainer">
      {/* Sidebar */}
      <aside className="sidebar">
        <img
          src="fergussonlogo.jpeg.jpg"
          alt="College Logo"
          className="logo"
        />
        <div className="roll-info">
          <strong>Roll No:</strong> {rollNumber}
          <br />
          <br />
          <strong>Session:</strong> 2024-2025
        </div>

        <nav className="nav-links">
          <Link to="/dashboard/home">
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/dashboard/profile">
            <i className="fas fa-user"></i> Profile
          </Link>
          <Link to="#">
            <i className="fas fa-briefcase"></i> Internship
          </Link>
          <Link to="#">
            <i className="fas fa-tasks"></i> Application Track
          </Link>
          <Link to="#">
            <i className="fas fa-comments"></i> Interview
          </Link>
          <Link to="#">
            <i className="fas fa-building"></i> Companies
          </Link>
          <Link to="#">
            <i className="fas fa-envelope"></i> Contact
          </Link>
          <Link to="#">
            <i className="fas fa-comment-dots"></i> Feedback
          </Link>
        </nav>

        <div className="bottom-links">
          <Link to="#">
            <i className="fas fa-cog"></i> Settings
          </Link>
          <Link to="/">
            <i className="fas fa-sign-out-alt"></i> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>FERGUSSON COLLEGE (AUTONOMOUS)</h1>
          <h2>Industrial Mathematics with Computer Application</h2>
        </header>

        {/* 👇 This will render child route like /dashboard/home */}
        <Outlet />
      </main>
    </div>
  );
};

export default StudentDashboard;
