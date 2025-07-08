import express from "express";
import Student from "../models/student.js";

const router = express.Router();

// POST /api/students/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    let student = await Student.findOne({ username });

    if (!student) {
      // Validate new student credentials
      const numberPart = username.replace("student@", "");
      const isValidStudent =
        username.startsWith("student@") &&
        !isNaN(numberPart) &&
        Number(numberPart) >= 246400 &&
        Number(numberPart) <= 246429 &&
        password === numberPart;

      if (!isValidStudent) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Create new student
      student = new Student({
        username,
        password,
        name: "Student " + numberPart,
        email: username,
      });

      await student.save();
    } else {
      // Existing student, check password
      if (student.password !== password) {
        return res.status(401).json({ error: "Invalid password" });
      }
    }

    // Success
    res.status(200).json(student);

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
