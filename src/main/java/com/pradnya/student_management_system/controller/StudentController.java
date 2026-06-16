package com.pradnya.student_management_system.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pradnya.student_management_system.entity.Student;
import com.pradnya.student_management_system.service.StudentService;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/students")



public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
}

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id,
                             @RequestBody Student student) {
        return studentService.updateStudent(id, student);
}

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id) {
    studentService.deleteStudent(id);
        return "Student deleted successfully!";
}
}