import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/studentService";


function StudentList( {refresh, onEdit }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this student?")) {
    await deleteStudent(id);
    loadStudents(); // Refresh the table
  }
};
  return (
    <div>
      <h2>Student List</h2>

      <table border="1" cellPadding="10">
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
        </tr>
        </thead>

        <tbody>
        {students.map((student) => (
    <tr key={student.id}>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.course}</td>
      <td>
      

        <td>
  <button onClick={() => onEdit(student)}>
    Edit
  </button>

  {" "}

  <button onClick={() => handleDelete(student.id)}>
    Delete
  </button>
</td>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}

export default StudentList;