package cfutils.assessment_helper.controller;

import cfutils.assessment_helper.entity.Student;
import cfutils.assessment_helper.exception.ResourceNotFoundException;
import cfutils.assessment_helper.repository.StudentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {
    @Autowired
    private StudentDao studentDao;

    //@GetMapping("/students/group{id}")
    @GetMapping("/students/group{id}")
    public List<Student> getAllStudents(@PathVariable int id){
        return studentDao.getAllStudentsFromGroup(id);
    }

    //Delete later
    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return studentDao.getAllStudentsFromGroup(1);
    }
    //

    @PostMapping("/students")
    public void createStudent(@RequestBody Student student) {
        studentDao.addStudent(student);
    }

    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable int id){
        Student student = studentDao.findById(id);
        studentDao.deleteStudentById(id);
    }

//    @GetMapping("/students/{id}")
//    public ResponseEntity<Student> getStudentById(@PathVariable int id) {
//        Student student = studentDao.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
//        return ResponseEntity.ok(student);
//    }
//
//    @PutMapping("/students/{id}")
//    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student employeeDetails){
//        Student student = studentRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
//
//        student.setFirstName(student.getFirstName());
//        student.setLastName(student.getLastName());
//        student.setEmail(student.getEmail());
//
//        Employee updatedEmployee = employeeRepository.save(student);
//        return ResponseEntity.ok(updatedEmployee);
//    }
}
