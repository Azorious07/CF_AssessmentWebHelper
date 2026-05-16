import { Component, inject, Inject, Input } from '@angular/core';
import { StudentService } from '../classes/StudentService';
import { Student } from '../classes/Student'
import { FormsModule } from '@angular/forms';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
    selector: 'app-create-student-dialog',
    imports: [FormsModule],
    templateUrl: './create-student-dialog.html',
    styleUrl: './create-student-dialog.css',
})
export class CreateStudentDialog {
    firstNameInput: string = '';
    lastNameInput: string = '';
    patronymicInput: string = '';
    emailInput: string = '';
    private dialogRef = inject(DialogRef);
    constructor(private studentService: StudentService, @Inject(DIALOG_DATA) public data: { groupId: number }) { }

    addStudent() {
        if (this.firstNameInput.trim() && this.lastNameInput.trim() && this.emailInput.trim()) {
            this.patronymicInput = this.patronymicInput.trim();
            const createdStudent = new Student(
                this.data.groupId,
                this.firstNameInput,
                this.lastNameInput,
                this.patronymicInput,
                this.emailInput);
            this.studentService.createStudent(createdStudent).subscribe({
                next: () => {
                    this.dialogRef.close(true);
                }
            });
        }

        this.clearInputs();
    }

    clearInputs() {
        this.firstNameInput = '';
        this.lastNameInput = '';
        this.patronymicInput = '';
        this.emailInput = '';
    }

    cancel(): void {
        this.dialogRef.close(false);
    }
}
