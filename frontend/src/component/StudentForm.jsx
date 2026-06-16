import { useState, useEffect } from "react";
import { addStudent, updateStudent } from "../services/studentService";

function StudentForm({ selectedStudent, onStudentSaved }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    if (selectedStudent) {
      setStudent(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (student.id) {
      await updateStudent(student.id, student);
    } else {
      await addStudent(student);
    }

    setStudent({
      name: "",
      email: "",
      course: "",
    });

    onStudentSaved();
  };

  return (
    <div>
      <h2>{student.id ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Course:</label><br />
          <input
            type="text"
            name="course"
            value={student.course}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">
          {student.id ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;