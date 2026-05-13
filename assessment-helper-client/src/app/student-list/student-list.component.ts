import { Component, NgModule, OnInit } from '@angular/core';
import { Student } from '../classes/Student';
import { StudentService } from '../classes/StudentService';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { Group } from '../classes/Group';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { GroupService } from '../classes/GroupService';
import { SelectModule } from 'primeng/select';
import { GroupDropdownSelectComponent } from '../dropdown-select/dropdown-select.component';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    imports: [RouterModule, CommonModule, SelectButtonModule, FormsModule, SelectModule, GroupDropdownSelectComponent],
    styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
    students$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
    groups$: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);
    currentGroups: Group[] = [];
    selectedGroup: Group | undefined;

    constructor(private studentService: StudentService, private groupService: GroupService) { }

    ngOnInit(): void {
        console.log(this.currentGroups);
        this.getGroups();
    }

    //Delete later
    getStudents() {
        this.studentService.getStudentsList().subscribe((value) => {
            this.students$.next(value);
        });
    }
    //

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

    getGroups(){
        this.groupService.getGroupsList().subscribe(groups => {
            this.groups$.next(groups);
            this.currentGroups = groups;
        });
    }

    trackByFn(index: number, item: any) {
        return item.id;
    }
}
