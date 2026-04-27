import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './Student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    private baseURL = "http://localhost:8080/api/students";

    constructor(private httpClient: HttpClient) { }

    getStudentsList(): Observable<Student[]> {
        return this.httpClient.get<Student[]>(`${this.baseURL}`);
    }

    createStudent(student: Student): Observable<Object> {
        return this.httpClient.post(`${this.baseURL}`, student);
    }

    getStudentById(id: number): Observable<Student> {
        return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
    }

    deleteStudent(id: number): Observable<Object> {
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
