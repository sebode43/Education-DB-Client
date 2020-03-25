import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MajorService } from '../major.service';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-detail',
  templateUrl: './major-detail.component.html',
  styleUrls: ['./major-detail.component.css']
})
export class MajorDetailComponent implements OnInit {

  major: Major = new Major();
  delete():void{
    this.majorsvc.remove(this.major).subscribe(
      res => {
        this.major = res;
        console.debug("Major delete successful", res);
        this.router.navigateByUrl("/majors/list");
      },
      err => {console.error("Major delete failed!", err)}
    );

  }
  minSatUpdate():void{
    if(this.major.minSat <= 1000){
      this.major.minSat += 100;
    }else{this.major.minSat += 50;}   
    this.majorsvc.change(this.major).subscribe(
      res => {
        console.log("MinSAT change successful");
      },
      err => {console.error("MinSAT change failed!", err)}
    );

  }

  constructor(
    private route: ActivatedRoute,
    private majorsvc: MajorService,
    private router: Router
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.majorsvc.get(id).subscribe(
      res => {
        this.major = res;
        console.debug("Major:", res);
      },
      err => {console.error("Error on Major-Detail Get", err)}
    );
  }

}
