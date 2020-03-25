import { Component, OnInit } from '@angular/core';
import { MajorService } from 'src/app/major/major.service';
import { Major } from 'src/app/major/major.class';

@Component({
  selector: 'app-majorcodecheck',
  templateUrl: './majorcodecheck.component.html',
  styleUrls: ['./majorcodecheck.component.css']
})
export class MajorcodecheckComponent implements OnInit {

  major: Major = new Major();
  message: string = "";

  check(): void{
    this.majorsvc.checkCode(this.major.code).subscribe(
      res => {
        this.major = res;
        this.message = this.major.name;
        console.debug("Major code found!", res);
      },

      err => {
        this.message = "Not found";
        console.debug("Not found", err);
      }
    );
  }

  constructor(
    private majorsvc: MajorService
  ) { }

  ngOnInit(): void {
  }

}
