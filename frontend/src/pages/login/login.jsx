import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!role || !username || !password) {
      setErrorMessage("Please fill all fields.");
      return;
    }

    const lowerUsername = username.trim().toLowerCase();
    const numberPart = lowerUsername.replace("student@", "");

    const isValidStudent =
      role.toLowerCase() === "student" &&
      lowerUsername.startsWith("student@") &&
      !isNaN(numberPart) &&
      Number(numberPart) >= 246400 &&
      Number(numberPart) <= 246429 &&
      password === numberPart;

    const isValidAdmin =
      role.toLowerCase() === "admin" &&
      lowerUsername === "admin@fergusson" &&
      password === "admin123";

    if (isValidStudent) {
      try {
        const res = await fetch("http://localhost:8000/api/students/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: lowerUsername, password }),
        });

        const data = await res.json();

        if (res.ok) {
          localStorage.setItem("rollNumber", password);
          navigate("/dashboard/home");
        } else {
          setErrorMessage(data.error || "Login failed.");
        }
      } catch (error) {
        console.error("Login error:", error);
        setErrorMessage("Something went wrong.");
      }
    } else if (isValidAdmin) {
      localStorage.setItem("adminLogin", true);
      navigate("/admin/dashboard");
    } else {
      setErrorMessage("Invalid credentials.");
    }
  };

  return (
    <>
      <div className="pannel">
        <div className="pannel-left">
          <div className="pannel-logo"></div>
          <div className="pannel-title">IMCA FERGUSSON COLLEGE, PLACEMENT CELL</div>
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
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="" disabled>Select Role</option>
              <option value="student">Student</option>
              <option value="teacher" disabled>Teacher</option>
              <option value="admin">Admin</option>
            </select>

            <div className="input-group">
              <i className="fa-regular fa-user"></i>
              <input
                type="text"
                placeholder="student@246400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-group password-group">
              <i className="fa-solid fa-lock"></i>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="246400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i
                className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              ></i>
            </div>

            <button type="submit">Login</button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
