import { useState } from "react";
import StudentForm from "./component/StudentForm";
import StudentList from "./component/StudentList";
import "./App.css";
import Navbar from "./component/Navbar";
function App() {
  const [refresh, setRefresh] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentSaved = () => {
    setRefresh(!refresh);
    setSelectedStudent(null);
  };

  // return (
  //   <div style={{ padding: "20px" }}>
  //     
  //     <h1>Student Management System</h1>

  //     <StudentForm
  //       selectedStudent={selectedStudent}
  //       onStudentSaved={handleStudentSaved}
  //     />

  //     <hr />

  //     <StudentList
  //       refresh={refresh}
  //       onEdit={setSelectedStudent}
  //     />
  //   </div>
  // );

    return (
  <div className="container">
    <Navbar />

    <StudentForm
      selectedStudent={selectedStudent}
      onStudentSaved={handleStudentSaved}
    />

    <hr />

    <StudentList
      refresh={refresh}
      onEdit={setSelectedStudent}
    />
  </div>
);
}

export default App;