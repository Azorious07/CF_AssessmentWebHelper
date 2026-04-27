import { Component, OnInit } from '@angular/core';
import { Student } from '../classes/Student';
import { StudentService } from '../classes/StudentService';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    imports: [RouterModule, CommonModule],
    styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
    students$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);

    constructor(private studentService: StudentService, private router: Router) { }

    ngOnInit(): void {
        this.getStudents();
    }

    getStudents() {
        this.studentService.getStudentsList().subscribe((value) => {
            this.students$.next(value);
        });
    }

    //   updateStudent(id: number){
    //     this.router.navigate(['update-student', id]);
    //   }

    deleteStudent(id: number) {
        this.studentService.deleteStudent(id).subscribe(() => {
            this.studentService.getStudentsList().subscribe((value) => {
                this.students$.next(value);
            });
        });
    }
    trackByFn(index: number, item: any) {
        return item.id;
    }
}
