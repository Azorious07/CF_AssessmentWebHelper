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

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    imports: [RouterModule, CommonModule, SelectButtonModule, FormsModule, SelectModule],
    styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
    students$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
    groups$: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);
    groupItems: string[] = [];
    selectedGroup: string = '';

    constructor(private studentService: StudentService, private groupService: GroupService) { }

    ngOnInit(): void {
        this.groupItems = this.getGroups();
        this.getStudents();
    }

    getStudents() {
        this.studentService.getStudentsList().subscribe((value) => {
            this.students$.next(value);
        });
    }

    deleteStudent(id: number) {
        this.studentService.deleteStudent(id).subscribe(() => {
            this.studentService.getStudentsList().subscribe((value) => {
                this.students$.next(value);
            });
        });
    }

    getGroups(): string[] {
        this.groupService.getGroupsList().subscribe((value) => {
            this.groups$.next(value);
        });
        let groupNames: string[] = [];
        this.groups$.value.forEach((group: Group) => groupNames.push(group.name))
        return groupNames;
    }

    trackByFn(index: number, item: any) {
        return item.id;
    }
}
