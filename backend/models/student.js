import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: String,
  name: String,
  email: String,
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
