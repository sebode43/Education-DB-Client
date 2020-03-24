import { Component, OnInit } from '@angular/core';
import { Student } from '../student.class';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { MajorService } from 'src/app/major/major.service';
import { Major } from 'src/app/major/major.class';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student = new Student();
  major: Major =  Major[];
  save(): void{
    this.student.majorid = Number(this.student.majorid);
    this.studentsvc.create(this.student).subscribe(
      res => {
        console.debug("Student Created", res);
        this.router.navigateByUrl("/students/list");
      },
      err => {console.error("Error for Student Create", err);}
    );
  }

  constructor(
    private studentsvc: StudentService,
    private majorsvc: MajorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.majorsvc.list().subscribe(
      res => {
        console.debug("Major:", res);
      },
      err => {console.error("Error editing major:", err);}
    );
  }

}
