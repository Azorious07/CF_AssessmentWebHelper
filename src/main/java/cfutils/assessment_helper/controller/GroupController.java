package cfutils.assessment_helper.controller;

import cfutils.assessment_helper.entity.Group;
import cfutils.assessment_helper.entity.Student;
import cfutils.assessment_helper.dao.GroupDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200")
public class GroupController {
    @Autowired
    private GroupDao groupDao;

    @GetMapping("/groups")
    public List<Group> getAllGroups(){
        return groupDao.getAllGroupsOfUser(1);
    }

    @PostMapping("/groups")
    public void createGroup(@RequestBody Group group) {
        groupDao.addGroup(group);
    }

    @DeleteMapping("/groups/{id}")
    public void deleteGroup(@PathVariable int id){
        groupDao.deleteGroupById(id);
    }
}
