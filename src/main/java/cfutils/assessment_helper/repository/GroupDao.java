package cfutils.assessment_helper.repository;

import cfutils.assessment_helper.entity.Student;
import cfutils.assessment_helper.entity.StudentGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GroupDao {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public GroupDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void addGroup(StudentGroup studentGroup) {
        jdbcTemplate.update(
                "INSERT INTO groups(id, user_id) VALUES (?, ?)",
                studentGroup.getId(), studentGroup.getUserId()
        );
    }

    public void deleteGroup(int id) {
        jdbcTemplate.update("DELETE FROM groups WHERE id = ?", id);
    }

    public List<StudentGroup> getAllGroupsOfUser(int userId) {
        List<StudentGroup> students = jdbcTemplate.query(
                "SELECT * FROM groups WHERE user_id = ?",
                (resultSet, rowNumber) ->
                        new StudentGroup(
                                resultSet.getInt("id"),
                                resultSet.getInt("user_id")
                        ), userId
        );

        return students;
    }
}
