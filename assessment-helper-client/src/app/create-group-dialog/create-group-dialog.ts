import { Component, inject } from '@angular/core';
import { GroupService } from '../classes/GroupService';
import { Group } from '../classes/Group'
import { FormsModule } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
    selector: 'app-create-group-dialog',
    imports: [FormsModule],
    templateUrl: './create-group-dialog.html',
    styleUrl: './create-group-dialog.css',
})
export class CreateGroupDialog {
    nameInput: string = '';
    private dialogRef = inject(DialogRef);
    constructor(private groupService: GroupService) {}
    addGroup(): void {
            if (this.nameInput.trim()) {
                this.groupService.createGroup(new Group(1, this.nameInput)).subscribe({
                    next: () => {
                        this.dialogRef.close(true);
                    }
                });
            }
            this.nameInput = '';
        }

        cancel(): void {
            this.dialogRef.close(false);
        }
}
