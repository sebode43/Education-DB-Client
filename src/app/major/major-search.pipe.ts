import { Pipe, PipeTransform } from '@angular/core';
import { Major } from './major.class';

@Pipe({
  name: 'majorSearch'
})
export class MajorSearchPipe implements PipeTransform {

  transform(majors: Major[], searchCriteria:string = ""): Major[] {
    if(searchCriteria === "") return majors;
    let criteria = searchCriteria.toLowerCase();
    let selMajors: Major[] = [];
    for(let major of majors){
      if(major.id.toString().includes(criteria) || (major.code.toLowerCase().includes(criteria)) 
      || (major.name.toLowerCase().includes(criteria)) || (major.minSat.toString().includes(criteria))) {
        selMajors.push(major);
      }
    }
    return selMajors;
  }

}
