import React, { useState } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaProjectDiagram,
  FaFileAlt,
  FaClipboardCheck,
} from "react-icons/fa";
import "./profilecompletion.css";

const steps = [
  { id: 1, title: "Personal Information", icon: <FaUser /> },
  { id: 2, title: "Academic Details", icon: <FaGraduationCap /> },
  { id: 3, title: "Address Details", icon: <FaMapMarkerAlt /> },
  { id: 4, title: "Project Details", icon: <FaProjectDiagram /> },
  { id: 5, title: "Documents", icon: <FaFileAlt /> },
  { id: 6, title: "Declaration", icon: <FaClipboardCheck /> },
];

const StudentProfileForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [programs, setPrograms] = useState([{ id: 1 }]);

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  const addProgram = () => {
    setPrograms((prev) => [...prev, { id: Date.now() }]);
  };

  const handleRemoveProgram = (indexToRemove) => {
    const updatedPrograms = programs.filter((_, index) => index !== indexToRemove);
    setPrograms(updatedPrograms);
  };

  const renderAcademicProgram = (program, index) => (
    <div key={program.id} className="program-block">
      <div className="program-header">
        <h4>Program {index + 1}</h4>
        {index !== 0 && (
          <button
            className="remove-btn"
            onClick={() => handleRemoveProgram(index)}
          >
            Remove
          </button>
        )}
      </div>
      <div className="form-grid">
        <div>
          <label>Program</label>
          <select>
            <option value="">Select Program</option>
            <option value="UG">Undergraduate (UG)</option>
            <option value="PG">Postgraduate (PG)</option>
            <option value="Diploma">Diploma</option>
          </select>

          <label>Year of Passing</label>
          <input type="number" placeholder="Enter year of passing" />

          <label>CGPA / Percentage</label>
          <input type="text" placeholder="Enter CGPA or percentage" />
        </div>

        <div>
          <label>University</label>
          <input type="text" placeholder="Enter university name" />

          <label>Specialization / Department</label>
          <input type="text" placeholder="Enter specialization or department" />
        </div>
      </div>
    </div>
  );

  const [projects, setProjects] = useState([
    { title: "", technologies: "", description: "" },
  ]);

  const handleProjectChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const addProject = () => {
    if (projects.length < 3) {
      setProjects([...projects, { title: "", technologies: "", description: "" }]);
    }
  };

  const removeProject = (index) => {
    const updated = [...projects];
    updated.splice(index, 1);
    setProjects(updated);
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
          <div className="form-content">
            <button onClick={addProgram}>+ Add Program</button>
            {programs.map(renderAcademicProgram)}
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
          <div className="project-section">
            {projects.map((project, index) => (
              <div key={index} className="project-block">
                <h3>Project {index + 1}</h3>
                <div className="form-grid">
                  <div>
                    <label>Project Title</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) =>
                        handleProjectChange(index, "title", e.target.value)
                      }
                    />

                    <label>Technologies Used</label>
                    <input
                      type="text"
                      value={project.technologies}
                      onChange={(e) =>
                        handleProjectChange(index, "technologies", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label>Description</label>
                    <textarea
                      value={project.description}
                      onChange={(e) =>
                        handleProjectChange(index, "description", e.target.value)
                      }
                    />
                  </div>
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeProject(index)}
                  >
                    Remove Project
                  </button>
                )}
              </div>
            ))}

            {projects.length < 3 && (
              <button type="button" className="add-btn" onClick={addProject}>
                + Add Project
              </button>
            )}
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
              <label>Upload Photo</label>
              <input type="file" />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="form-grid">
            <div>
              <label className="declaration-label">
                <input type="checkbox" required />{" "}
                I hereby declare that the information provided above is true to the best of my knowledge.
              </label>
            </div>

            <div className="submit-btn-container">
              <button className="submit-btn" onClick={() => alert("Form submitted successfully!")}>
                Save and Submit
              </button>
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
              className={`step-icon-container ${activeStep === step.id
                ? "active"
                : activeStep > step.id
                  ? "completed"
                  : ""
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
            <button onClick={() => setActiveStep((prev) => prev - 1)}>
              Previous
            </button>
          )}
          {activeStep < steps.length && (
            <button onClick={() => setActiveStep((prev) => prev + 1)}>
              Save & Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfileForm;