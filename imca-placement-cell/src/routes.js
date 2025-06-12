import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import StudentDashboard from "./pages/studentdashboard/studentdashboard";
import ProfileCompletion from "./pages/profile/profilecompletion";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/profile" element={<ProfileCompletion />} />
        </Routes>
    );
};

export default AppRoutes;
