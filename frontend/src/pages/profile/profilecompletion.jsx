import React, { useState } from "react";
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import "./profilecompletion.css";

const steps = [
  { id: 1, title: "Personal Information", icon: <FaUser /> },
  { id: 2, title: "Academic Details", icon: <FaGraduationCap /> },
  { id: 3, title: "Address Details", icon: <FaMapMarkerAlt /> },
  { id: 4, title: "Project Details", icon: <FaProjectDiagram /> },
  { id: 5, title: "Documents", icon: <FaFileAlt /> },
];

const StudentProfileForm = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  const renderStepForm = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="form-grid">
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />

              <label>Roll Number</label>
              <input type="text" placeholder="Enter roll number" />

              <label>Email</label>
              <input type="email" placeholder="Enter email" />
            </div>

            <div>
              <label>Phone</label>
              <input type="tel" placeholder="Enter phone number" />

              <label>Date of Birth</label>
              <input type="date" />

              <label>Gender</label>
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-grid">
            <div>
              <label>Degree</label>
              <input type="text" placeholder="Enter degree" />

              <label>Department</label>
              <input type="text" placeholder="Enter department" />

              <label>Passing Year</label>
              <input type="number" placeholder="Enter year" />
            </div>

            <div>
              <label>CGPA</label>
              <input type="text" placeholder="Enter CGPA" />

              <label>University</label>
              <input type="text" placeholder="Enter university name" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-grid">
            <div>
              <label>Address Line 1</label>
              <input type="text" />

              <label>City</label>
              <input type="text" />
            </div>

            <div>
              <label>State</label>
              <input type="text" />

              <label>PIN Code</label>
              <input type="text" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-grid">
            <div>
              <label>Project Title</label>
              <input type="text" />

              <label>Technologies Used</label>
              <input type="text" />
            </div>

            <div>
              <label>Description</label>
              <textarea />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="form-grid">
            <div>
              <label>Upload Resume</label>
              <input type="file" />
            </div>

            <div>
              <label>Upload Transcript</label>
              <input type="file" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboardcontainer">


      <div className="profile-form-container">
        <div className="stepper-icons">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`step-icon-container ${activeStep === step.id ? "active" : activeStep > step.id ? "completed" : ""
                }`}
              onClick={() => handleStepClick(step.id)}
            >
              <div className="circle">{step.icon}</div>
              <div className="tooltip">{step.title}</div>
            </div>
          ))}
        </div>

        <div className="partition-divider" />

        <h2 className="form-title">{steps[activeStep - 1].title}</h2>

        <div className="form-content">{renderStepForm()}</div>

        <div className="form-buttons">
          {activeStep > 1 && (
            <button onClick={() => setActiveStep((prev) => prev - 1)}>Previous</button>
          )}
          {activeStep < steps.length && (
            <button onClick={() => setActiveStep((prev) => prev + 1)}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfileForm;