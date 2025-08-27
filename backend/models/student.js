import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  // Auth info
  username: { type: String, required: true, unique: true },
  password: { type: String },

  // Personal info
  name: { type: String },
  email: { type: String },

  // Academic info (array of objects)
  academicInfo: [
    {
      degree: String,
      department: String,
      passingYear: Number,
      university: String,
      cgpa: Number,
    },
  ],

  // Projects (array of objects)
  projects: [
    {
      title: String,
      technologies: String,
      description: String,
    },
  ],

  // Declaration checkbox
  declaration: { type: Boolean },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
