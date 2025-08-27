import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AppRoutes from "./routes";
import StudentForm from "./components/studentform";


function App() {
  return (
    <Router>
      <AppRoutes />
      <Routes>
        <Route path="/" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
