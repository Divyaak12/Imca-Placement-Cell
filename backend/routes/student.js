import express from "express";
import Student from "../models/student.js";

const router = express.Router();

// POST /api/students/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    let student = await Student.findOne({ username });

    // If student not found, create a new one
    if (!student) {
      student = new Student({
        username,
        password,
        name: "Student " + username.split("@")[1], // auto-name from roll
        email: username,
      });
      await student.save();
    }

    res.status(200).json(student);
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
