import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './Student';
import { Group } from './Group';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    private baseURL = "http://localhost:8080/api/groups";

    constructor(private httpClient: HttpClient) { }

    getGroupsList(): Observable<Group[]> {
        return this.httpClient.get<Group[]>(`${this.baseURL}`);
    }

    createGroup(group: Group): Observable<Object> {
        return this.httpClient.post(`${this.baseURL}`, group);
    }

    getGroupById(id: number): Observable<Group> {
        return this.httpClient.get<Group>(`${this.baseURL}/${id}`);
    }

    deleteGroup(id: number): Observable<Object> {
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
