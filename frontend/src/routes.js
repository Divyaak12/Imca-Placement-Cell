import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import StudentDashboard from "./pages/studentdashboard/studentdashboard";
import ProfileCompletion from "./pages/profile/profilecompletion";
import Home from "./pages/studentdashboard/Home"; // ✅ Matches 'home.jsx'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      {/* Nested inside /dashboard */}
      <Route path="/dashboard" element={<StudentDashboard />}>
        <Route path="home" element={<Home />} /> {/* 👈 Dashboard content */}
        <Route path="profile" element={<ProfileCompletion />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
