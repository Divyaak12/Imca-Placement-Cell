import React from "react";
import axios from "axios";

const StudentForm = () => {
  const handleSubmit = async () => {
    const data = {
      personalInfo: {
        name: "John Doe",
        email: "john@example.com",
      },
      academicInfo: [
        {
          degree: "Undergraduate",
          department: "CS",
          passingYear: 2025,
          university: "XYZ University",
          cgpa: 8.5,
        },
      ],
      projects: [
        {
          title: "Gym Tracker",
          technologies: "React, Node.js",
          description: "Tracks gym progress",
        },
      ],
      declaration: true,
    };

    try {
      await axios.post("http://localhost:5000/api/forms", data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h2>Student Profile Form</h2>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StudentForm;
