import { Component } from '@angular/core';
import { GroupService } from '../classes/GroupService';
import { Group } from '../classes/Group'
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-create-group-dialog',
    imports: [FormsModule],
    templateUrl: './create-group-dialog.html',
    styleUrl: './create-group-dialog.css',
})
export class CreateGroupDialog {
    groupNameInput: string = '';
    constructor(private groupService: GroupService) {}
    addGroup(name: string): void {
        if (this.groupNameInput != '') {
            console.log(this.groupNameInput);
            this.groupService.createGroup(new Group(1, 1, name));
        }
    }
}
