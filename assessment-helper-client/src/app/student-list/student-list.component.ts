import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Student } from '../classes/Student';
import { StudentService } from '../classes/StudentService';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Group } from '../classes/Group';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../classes/GroupService';
import { SelectModule } from 'primeng/select';
import { GroupDropdownSelectComponent } from '../dropdown-select/dropdown-select.component';
import { CreateStudentDialog } from '../create-student-dialog/create-student-dialog';
import { Dialog } from '@angular/cdk/dialog';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    imports: [RouterModule, CommonModule, SelectButtonModule, FormsModule, SelectModule, GroupDropdownSelectComponent, CreateStudentDialog],
    styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
    students$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
    groups$: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);
    currentGroups: Group[] = [];
    selectedGroup: Group | undefined;
    studentCreateDialog = inject(Dialog);

    constructor(private studentService: StudentService, private groupService: GroupService, public dialog: Dialog) { }

    ngOnInit(): void {
        this.getGroups();
    }

    getStudentsByGroupId(id: number) {
        this.studentService.getStudentsByGroupList(id).subscribe((value) => {
            this.students$.next(value);
        });
    }

    onItemSelect(item: Group) {
        this.selectedGroup = item;
        this.getStudentsByGroupId(item.id);
    }

    deleteStudent(id: number) {
        this.studentService.deleteStudent(id).subscribe(() => {
            this.studentService.getStudentsByGroupList(this.selectedGroup?.id).subscribe((value) => {
                this.students$.next(value);
            });
        });
    }

    getGroups() {
        this.groupService.getGroupsList().subscribe(groups => {
            this.groups$.next(groups);
            this.currentGroups = groups;
        });
    }

    openCreateDialog() {
        const dialogRef = this.dialog.open(CreateStudentDialog, {
            data: { groupId: this.selectedGroup!.id }
        });
        dialogRef.closed.subscribe((result) => {
            if (result) {
                this.getStudentsByGroupId(this.selectedGroup!.id);
            }
        });
    }

    trackByFn(index: number, item: any) {
        return item.id;
    }
}
