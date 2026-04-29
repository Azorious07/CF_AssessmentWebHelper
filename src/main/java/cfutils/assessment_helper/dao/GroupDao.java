package cfutils.assessment_helper.dao;

import cfutils.assessment_helper.entity.Group;
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

    public void addGroup(Group group) {
        jdbcTemplate.update(
                "INSERT INTO groups(user_id) VALUES (?)",
                group.getUserId()
        );
    }

    public void deleteGroupById(int id) {
        jdbcTemplate.update("DELETE FROM groups WHERE id = ?", id);
    }

    public List<Group> getAllGroupsOfUser(int userId) {
        List<Group> groups = jdbcTemplate.query(
                "SELECT * FROM groups WHERE user_id = ?",
                (resultSet, rowNumber) ->
                        new Group(
                                resultSet.getInt("id"),
                                resultSet.getInt("user_id"),
                                resultSet.getString("name")
                        ), 1//change when added users
        );

        return groups;
    }
}
