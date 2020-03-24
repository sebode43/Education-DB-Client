import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.class';
import { HttpClient } from '@angular/common/http';

const url: string = "http://localhost:5000/api/students";
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  list(): Observable<Student[]>{
    return this.http.get(`${url}`) as Observable<Student[]>;
  }
  get(id: any): Observable<Student>{
    return this.http.get(`${url}/${id}`) as Observable<Student>;
  }
  constructor(private http: HttpClient) { }
}
