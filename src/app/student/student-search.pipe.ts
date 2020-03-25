import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student.class';

@Pipe({
  name: 'studentSearch'
})
export class StudentSearchPipe implements PipeTransform {

  transform(students: Student[], searchCriteria: string = ""): Student[] {
    if(searchCriteria === "") return students;
    let criteria = searchCriteria.toLowerCase();
    let selStudents: Student [] = [];
    for(let student of students){
      if(student.id.toString().includes(criteria) || student.name.toLowerCase().includes(criteria) 
      || student.sat.toString().includes(criteria) || student.gpa.toString().includes(criteria)
      || student.majorId != null && student.majorId.toString().includes(criteria)){
             selStudents.push(student); 
      }   
    }
    return selStudents;
  }

}
