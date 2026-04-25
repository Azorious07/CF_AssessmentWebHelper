package cfutils.assessment_helper.repository;

import cfutils.assessment_helper.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class StudentDao {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public StudentDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void addStudent(Student student) {
        jdbcTemplate.update(
                "INSERT INTO students(group_id, id, first_name, last_name, patronymic, email) VALUES (?, ?, ?, ?, ?, ?)",
                student.getGroupId(), student.getId(), student.getFirstName(), student.getLastName(),
                student.getPatronymic(), student.getEmail()
        );
    }

    //TODO UPDATE

    public void deleteStudentById(int id) {
        jdbcTemplate.update("DELETE FROM students WHERE id = ?", id);
    }

    public Student findById(int id) {
        List<Student> students = jdbcTemplate.query(
                "SELECT * FROM students WHERE group_id = ?",
                (resultSet, rowNumber) ->
                        new Student(
                                resultSet.getInt("group_id"),
                                resultSet.getInt("id"),
                                resultSet.getString("first_name"),
                                resultSet.getString("last_name"),
                                resultSet.getString("patronymic"),
                                resultSet.getString("email")
                        ), id
        );

        return students.getFirst();
    }

    public List<Student> getAllStudentsFromGroup(int groupId) {
        List<Student> students = jdbcTemplate.query(
                "SELECT * FROM students WHERE group_id = ?",
                (resultSet, rowNumber) ->
                        new Student(
                                resultSet.getInt("group_id"),
                                resultSet.getInt("id"),
                                resultSet.getString("first_name"),
                                resultSet.getString("last_name"),
                                resultSet.getString("patronymic"),
                                resultSet.getString("email")
                        ), groupId
        );

        return students;
    }
}

