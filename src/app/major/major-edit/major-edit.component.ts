import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-edit',
  templateUrl: './major-edit.component.html',
  styleUrls: ['./major-edit.component.css']
})
export class MajorEditComponent implements OnInit {

  major: Major = new Major();
  save(): void{
    this.majorsvc.change(this.major).subscribe(
      res => {
        this.major = res;
        console.debug("Major change successful!", res);
        this.router.navigateByUrl("/majors/list");
      },
      err => {console.error("Error editing major:", err);}
    );
  }

  constructor(
    private majorsvc: MajorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.majorsvc.get(id).subscribe(
      res => {
        this.major = res;
        console.debug("Major:", res);
      },
      err => {console.error("Error editing major:", err);}
    );
  }

}
