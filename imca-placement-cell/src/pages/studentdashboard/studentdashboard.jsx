import React from "react";
import "./studentdashboard.css"; // your existing CSS file
import { Link } from "react-router-dom"; // ✅ Import Link

const StudentDashboard = () => {
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
          <strong>Roll No:</strong> 246429
          <br />
          <br />
          <strong>Session:</strong> 2024-2025
        </div>

        {/* ✅ Sidebar Navigation */}
        <nav className="nav-links">
          <Link to="/dashboard">
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/profile">
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

        {/* Bottom Sidebar Links */}
        <div className="bottom-links">
          <Link to="#">
            <i className="fas fa-cog"></i> Settings
          </Link>
          <Link to="#">
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

        <section className="notice-box">
          <p>
            <strong>Welcome, Prathamesh Davhale!</strong>
          </p>
          <p>
            <strong>Notice:</strong> Josh is visiting for campus placement on
            03/07/2025, interested students must register by 03/10/2025.
          </p>
        </section>

        <div className="dashboard-grid">
          {/* Profile Completion */}
          <div className="box profile-completion">
            <h3>Profile Completion:</h3>
            <div className="bar">
              <div style={{ width: "80%" }}>PERSONAL</div>
            </div>
            <div className="bar">
              <div style={{ width: "40%" }}>ACADEMICS</div>
            </div>
            <div className="bar">
              <div style={{ width: "60%" }}>ADDRESS</div>
            </div>
            <div className="bar">
              <div style={{ width: "20%" }}>DOCUMENT</div>
            </div>
          </div>

          {/* Recruiters */}
          <div className="box recruiters">
            <h3>Recruiters:</h3>
            <div className="recruiter-list">
              <div className="recruiter">
                <img src="https://via.placeholder.com/30" alt="Logo" />
                <span>XYZ COMPANY</span>
              </div>
              <div className="recruiter highlighted">
                <img src="https://via.placeholder.com/30" alt="Logo" />
                <span>
                  <strong>ABC COMPANY</strong>
                </span>
                <span className="icons">
                  <i className="fas fa-comment-alt" title="Chat"></i>
                  <i className="fas fa-star" title="Rate"></i>
                  <i className="fas fa-pen" title="Edit"></i>
                  <i className="fas fa-ellipsis-v" title="More"></i>
                </span>
              </div>
              <div className="recruiter">
                <img src="https://via.placeholder.com/30" alt="Logo" />
                <span>PQR COMPANY</span>
              </div>
              <div className="recruiter">
                <img src="https://via.placeholder.com/30" alt="Logo" />
                <span>MNO COMPANY</span>
              </div>
              <div className="see-more">
                <a href="company-profile.html">+ See More Companies</a>
              </div>
            </div>
          </div>

          {/* Campus Achiever */}
          <div className="box achiever">
            <h3>Campus Achiever:</h3>
            <img src="https://via.placeholder.com/40" alt="A1" />
            <img src="https://via.placeholder.com/40" alt="A2" />
            <img src="https://via.placeholder.com/40" alt="A3" />
          </div>

          {/* Upcoming Events */}
          <div className="box events">
            <h3>Upcoming Events:</h3>
            <ul>
              <li>📌 Pre-Placement Talk – Infosys Virtual Session | 12th March, 10 AM</li>
              <li>📌 Aptitude Test – TCS | 15th March, 2 PM</li>
              <li>📌 Job Fair 2025 – On-Campus Hiring | 25th March, Full Day</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
