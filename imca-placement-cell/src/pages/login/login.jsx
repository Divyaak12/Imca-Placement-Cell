import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  // Form states
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Hardcoded credentials
  const credentials = {
    student: { username: "student", password: "student123" },
    teacher: { username: "teacher", password: "teacher123" },
    admin: { username: "admin", password: "admin123" },
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Role validation
    if (!role) {
      setErrorMessage("Please select a role.");
      return;
    }

    const selectedRole = role.toLowerCase();
    const enteredUsername = username.trim().toLowerCase();

    // Check if credentials match
    if (
      credentials[selectedRole]?.username === enteredUsername &&
      credentials[selectedRole]?.password === password
    ) {
      setErrorMessage("");

      // Navigate based on role
      if (selectedRole === "student") {
        navigate("/dashboard");
      } else {
        alert(`Redirecting ${selectedRole}, but dashboard not yet created.`);
      }
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <>
      {/* Top Panel */}
      <div className="pannel">
        <div className="pannel-left">
          <div className="pannel-logo">
            <div className="logo"></div>
          </div>
          <div className="pannel-title">
            IMCA FERGUSSON COLLEGE, PLACEMENT CELL
          </div>
        </div>
        <div className="pannel-ops">
          <p>Overview</p>
          <p>Contact Us</p>
        </div>
      </div>

      {/* Main Login Section */}
      <section className="container">
        <div className="logo-container">
          <h1>IMCA PLACEMENT PORTAL</h1>
          <h2>Sign In</h2>

          <form onSubmit={handleSubmit}>
            {/* Role Select Dropdown */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>

            {/* Username Field */}
            <div className="input-group">
              <i className="fa-regular fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="input-group password-group">
              <i className="fa-solid fa-lock"></i>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fa-regular ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                }`}
                onClick={() => setShowPassword((prev) => !prev)}
                style={{ cursor: "pointer" }}
              ></i>
            </div>

            {/* Submit Button */}
            <button type="submit">Sign In</button>

            {/* Error Message */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
