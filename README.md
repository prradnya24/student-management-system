# 🎓 Student Management System

A full-stack CRUD application built using **Java Spring Boot**, **React**, and **MySQL** for managing student records efficiently.

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-Backend-brightgreen)
![React](https://img.shields.io/badge/React-Frontend-blue)
![MySQL](https://img.shields.io/badge/MySQL-Database-lightblue)

---

## 📌 Overview

The Student Management System is a web application that allows users to manage student data through a clean, intuitive interface. It demonstrates a complete full-stack workflow — from a React-based frontend, through a Spring Boot REST API, down to persistent storage in a MySQL database.

---

## ✨ Features

- ➕ Add Student
- 📋 View All Students
- ✏️ Update Student Details
- ❌ Delete Student
- 🔗 RESTful API integration
- 💾 MySQL database persistence

---

## 🛠️ Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Hibernate
- Maven

### Frontend
- React
- Axios
- Vite

### Database
- MySQL

### Tools Used
- VS Code
- Postman
- Git & GitHub

---

## 🏗️ Architecture

```
React Frontend  →  Spring Boot REST API  →  JPA/Hibernate  →  MySQL Database
```

The React frontend communicates with the Spring Boot backend via REST API calls (using Axios). The backend handles business logic and uses Spring Data JPA with Hibernate as the ORM layer to interact with the MySQL database.

---

## 📂 Project Structure

```
student-management-system/
├── backend/
│   ├── src/main/java/com/example/studentmanagement/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   │   ├── service/
│   │   └── StudentManagementApplication.java
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Java 17+
- Node.js & npm
- MySQL Server
- Maven

### 1. Clone the Repository
```bash
git clone https://github.com/prradnya24/student-management-system.git
cd student-management-system
```

### 2. Backend Setup
```bash
cd backend
```
Configure your MySQL credentials in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```
Run the backend:
```bash
mvn spring-boot:run
```
The API will start on `http://localhost:8080`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will start on `http://localhost:5173`

---

## 🔗 API Endpoints

| Method | Endpoint              | Description           |
|--------|-----------------------|------------------------|
| GET    | `/api/students`       | Get all students       |
| GET    | `/api/students/{id}`  | Get student by ID      |
| POST   | `/api/students`       | Add a new student      |
| PUT    | `/api/students/{id}`  | Update student details |
| DELETE | `/api/students/{id}`  | Delete a student        |

---

## 🧪 Testing

API endpoints were tested using **Postman** to verify CRUD operations before integrating with the React frontend.

---

## 🚀 Future Enhancements

- Add authentication & role-based access (Admin/Teacher/Student)
- Pagination and search/filter functionality
- Export student data to PDF/Excel
- Form validation and error handling improvements

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](../../issues) or submit a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Your Name**
GitHub: [@prradnya24](https://github.com/prradnya24)
