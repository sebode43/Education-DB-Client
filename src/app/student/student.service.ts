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
  create(student: Student): Observable<Student>{
    return this.http.post(`${url}`, student) as Observable<Student>;
  }
  change(student: Student): Observable<any>{
    return this.http.put(`${url}/${student.id}`, student) as Observable<any>;
  }
  remove(student: Student): Observable<any>{
    return this.http.delete(`${url}/${student.id}`) as Observable<any>;
  }
  constructor(private http: HttpClient) { }
}
