import React, { useState } from "react";
import "./login.css";

const Login = ({ onLogin }) => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const credentials = {
    student: { username: "student", password: "student123" },
    teacher: { username: "teacher", password: "teacher123" },
    admin: { username: "admin", password: "admin123" },
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
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
      credentials[selectedRole] &&
      credentials[selectedRole].username === enteredUsername &&
      credentials[selectedRole].password === password
    ) {
      setErrorMessage("");
      // Instead of redirecting, call onLogin
      onLogin(selectedRole); // Pass role if needed
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <>
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

      <section className="container">
        <div className="logo-container">
          <h1>IMCA PLACEMENT PORTAL</h1>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <select
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>

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
                onClick={handleTogglePassword}
                style={{ cursor: "pointer" }}
              ></i>
            </div>

            <button type="submit">Sign In</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
