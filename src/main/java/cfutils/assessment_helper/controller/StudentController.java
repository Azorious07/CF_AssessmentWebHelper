package cfutils.assessment_helper.controller;

import cfutils.assessment_helper.entity.Student;
import cfutils.assessment_helper.dao.StudentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {
    @Autowired
    private StudentDao studentDao;

    @GetMapping("/students/group{id}")
    public List<Student> getStudentsFromGroup(@PathVariable int id) {
        return studentDao.getAllStudentsFromGroup(id);
    }

    @PostMapping("/students")
    public void createStudent(@RequestBody Student student) {
        studentDao.addStudent(student);
    }

    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable int id) {
        Student student = studentDao.findById(id);
        //TODO validate deletion
        studentDao.deleteStudentById(id);
    }
}
