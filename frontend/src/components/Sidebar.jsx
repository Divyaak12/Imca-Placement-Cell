import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./Sidebar.css";

export default function Sidebar({ rollNumber }) {
  return (
    <aside className="sidebar">
      <img src="/fergussonlogo.jpeg.jpg" alt="College Logo" className="logo" />

      <div className="roll-info">
        <strong>Roll No:</strong> {rollNumber}
        <br />
        <br />
        <strong>Session:</strong> 2024-2025
      </div>

      <nav className="nav-links">
        <Link to="/dashboard/home">
          <i className="fa fa-home"></i> Home
        </Link>
        <Link to="/dashboard/profile">
          <i className="fa fa-user"></i> Profile
        </Link>
        <Link to="/dashboard/InternshipPage">
          <i className="fa fa-briefcase"></i> Internship
        </Link>
        <Link to="#">
          <i className="fa fa-tasks"></i> Application Track
        </Link>
        <Link to="#">
          <i className="fa fa-comments"></i> Interview
        </Link>
        <Link to="#">
          <i className="fa fa-building"></i> Companies
        </Link>
        <Link to="#">
          <i className="fa fa-envelope"></i> Contact
        </Link>
        <Link to="#">
          <i className="fa fa-comment-dots"></i> Feedback
        </Link>
      </nav>

      <div className="bottom-links">
        <Link to="#">
          <i className="fa fa-cog"></i> Settings
        </Link>
        <Link to="/">
          <i className="fa fa-sign-out"></i> Sign Out
        </Link>
      </div>
    </aside>
  );
}