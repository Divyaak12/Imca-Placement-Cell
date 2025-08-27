import React from "react";

export default function InternshipCard({ company, role, stipend, location, deadline, duration, applied }) {
  return (
    <div className="internship-card">
      <h3>{company}</h3>
      <p className="role">{role}</p>
      <p className="stipend">₹ {stipend}/month</p>
      <p className="location">{location}</p>
      <p className="deadline">Apply by: {deadline}</p>
      <p className="duration">Duration: {duration}</p>

      {applied ? (
        <button className="applied-btn">Applied ✓</button>
      ) : (
        <button className="apply-btn">Apply Now</button>
      )}
    </div>
  );
}