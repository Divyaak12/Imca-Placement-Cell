import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import backgroundImage from "../../assets/fergusson.jpg"; // ✅ relative path
import logoImage from "../../assets/fergussonlogo.jpeg";  // ✅ fixed path

const LoginPage = () => {
  const navigate = useNavigate();

  // State for form
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Hardcoded login data
  const credentials = {
    student: { username: "student", password: "student123" },
    teacher: { username: "teacher", password: "teacher123" },
    admin: { username: "admin", password: "admin123" },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role) {
      setErrorMessage("Please select a role.");
      return;
    }

    const selectedRole = role.toLowerCase();
    const enteredUsername = username.trim().toLowerCase();

    if (
      credentials[selectedRole]?.username === enteredUsername &&
      credentials[selectedRole]?.password === password
    ) {
      setErrorMessage("");

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
      {/* Background */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: -1
        }}
      ></div>

      {/* Top Panel */}
      <div className="pannel">
        <div className="pannel-left">
          <div className="pannel-logo">
            <div
              className="logo"
              style={{
                backgroundImage: `url(${logoImage})`,
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
              }}
            ></div>
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

      {/* Login Form Section */}
      <section className="container">
        <div className="logo-container">
          <h1>IMCA PLACEMENT PORTAL</h1>
          <h2>Sign In</h2>

          <form onSubmit={handleSubmit}>
            {/* Role Selector */}
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

            {/* Username Input */}
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

            {/* Password Input */}
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
                className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword((prev) => !prev)}
                style={{ cursor: "pointer" }}
              ></i>
            </div>

            {/* Submit Button */}
            <button type="submit">Sign In</button>

            {/* Error Display */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
