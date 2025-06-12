import React, { useState } from "react";
import "./profilecompletion.css";

const StudentProfileForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",

    // Academic Information
    rollNumber: "",
    branch: "",
    semester: "",
    cgpa: "",
    tenthPercent: "",
    twelfthPercent: "",

    // Skills
    programmingLanguages: "",
    tools: "",
    certifications: "",

    // Projects & Internships
    projects: "",
    internships: "",

    // Documents
    resume: null,
    photo: null,

    // Declaration
    declaration: false,
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSave = () => {
    console.log("Step Data Saved", formData);
    alert("Current step data saved successfully!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Profile submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl mt-8 mb-16">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Student Profile Form</h1>
      <form onSubmit={handleSubmit} className="space-y-10">
        {step === 1 && (
          <section>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="fullName" placeholder="Full Name" onChange={handleChange} className="input" required />
              <input name="email" type="email" placeholder="Email" onChange={handleChange} className="input" required />
              <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input" required />
              <input name="dob" type="date" placeholder="Date of Birth" onChange={handleChange} className="input" required />
              <select name="gender" onChange={handleChange} className="input" required>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input name="address" placeholder="Address" onChange={handleChange} className="input" required />
            </div>
          </section>
        )}

        {step === 2 && (
          <section>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Academic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="rollNumber" placeholder="Roll Number" onChange={handleChange} className="input" required />
              <input name="branch" placeholder="Branch" onChange={handleChange} className="input" required />
              <input name="semester" placeholder="Semester" onChange={handleChange} className="input" required />
              <input name="cgpa" placeholder="Current CGPA" onChange={handleChange} className="input" required />
              <input name="tenthPercent" placeholder="10th %" onChange={handleChange} className="input" required />
              <input name="twelfthPercent" placeholder="12th %" onChange={handleChange} className="input" required />
            </div>
          </section>
        )}

        {step === 3 && (
          <section>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Technical Skills & Certifications</h2>
            <textarea name="programmingLanguages" placeholder="Programming Languages (e.g. C++, Java)" onChange={handleChange} className="input" />
            <textarea name="tools" placeholder="Tools/Technologies (e.g. Git, MySQL)" onChange={handleChange} className="input" />
            <textarea name="certifications" placeholder="Certifications" onChange={handleChange} className="input" />
          </section>
        )}

        {step === 4 && (
          <section>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Projects and Internships</h2>
            <textarea name="projects" placeholder="Projects Description" onChange={handleChange} className="input" />
            <textarea name="internships" placeholder="Internship Details" onChange={handleChange} className="input" />
          </section>
        )}

        {step === 5 && (
          <section>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="resume" type="file" accept=".pdf" onChange={handleChange} className="input" required />
              <input name="photo" type="file" accept="image/*" onChange={handleChange} className="input" required />
            </div>
          </section>
        )}

        {step === 6 && (
          <section>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Declaration</h2>
            <div className="flex items-start gap-2">
              <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} required className="mt-1" />
              <label className="text-sm">
                I hereby declare that all the information provided is true and correct to the best of my knowledge. I understand that providing false
                information may result in disqualification from the placement process.
              </label>
            </div>
          </section>
        )}

        <div className="flex justify-between gap-4">
          {step > 1 && (
            <button type="button" onClick={handleBack} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
              Back
            </button>
          )}

          <div className="flex gap-4 ml-auto">
            <button type="button" onClick={handleSave} className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500">
              Save
            </button>

            {step < 6 ? (
              <button type="button" onClick={handleNext} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Next
              </button>
            ) : (
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                Submit Profile
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentProfileForm;