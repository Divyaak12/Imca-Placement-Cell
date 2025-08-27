import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import StudentDashboard from "./pages/studentdashboard/studentdashboard";
import ProfileCompletion from "./pages/profile/profilecompletion";
import Home from "./pages/studentdashboard/Home";
import InternshipPage from "./pages/InternshipPage/InternshipPage";
import StudentForm from "./components/studentform";



import Admin from "./pages/admin/admin"; // Admin layout with sidebar

const AppRoutes = () => {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Student Dashboard with Nested Routes */}
      <Route path="dashboard" element={<StudentDashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<ProfileCompletion />} />
        <Route path="internship" element={<InternshipPage />} />
      </Route>

      {/* Admin Dashboard with Sidebar & Nested Routes */}
      <Route path="/admin" element={<Admin />}>
       {/* <Route index element={<Home />} /> */}
      <Route path="studentdashboard" element={<StudentForm />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;
