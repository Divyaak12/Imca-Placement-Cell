import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import StudentDashboard from "./pages/studentdashboard/studentdashboard";
import ProfileCompletion from "./pages/profile/profilecompletion";
import Home from "./pages/studentdashboard/Home";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Student Dashboard with Nested Routes */}
      <Route path="/dashboard" element={<StudentDashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<ProfileCompletion />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
