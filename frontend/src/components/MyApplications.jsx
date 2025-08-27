import React from "react";
import "./MyApplications.css";

export default function MyApplications() {
  const applications = [
    {
      id: 1,
      company: "Google",
      role: "Software Development Intern",
      stipend: "₹25,000/month",
      location: "Bangalore",
      appliedDate: "25 Jan 2025",
      duration: "6 months",
      status: "Selected",
      message: "🎉 Congratulations! You've been selected. Your offer letter is ready for download.",
    },
    // You can add more applications here...
  ];

  return (
    <div className="applications-container">
      <h2>My Applications</h2>
      <p>{applications.length} applications</p>

      {applications.map((app) => (
        <div key={app.id} className="application-card">
          <div className="application-header">
            <h3>{app.company}</h3>
            <span className={`status ${app.status.toLowerCase()}`}>
              {app.status}
            </span>
          </div>
          <p className="role">{app.role}</p>

          <div className="application-info">
            <p>💰 <span className="stipend">{app.stipend}</span></p>
            <p>📍 {app.location}</p>
            <p>📅 Applied on: {app.appliedDate}</p>
            <p><strong>Duration:</strong> {app.duration}</p>
          </div>

          <div className="application-message">
            <p>{app.message}</p>
          </div>

          <div className="application-actions">
            <button className="btn-outline">👁 View Details</button>
            <button className="btn-primary">⬇ Download Offer</button>
          </div>
        </div>
      ))}
    </div>
  );
}
