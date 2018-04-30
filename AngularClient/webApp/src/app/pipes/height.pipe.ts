import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {
  readonly Unit:string;
  constructor(){
    this.Unit="cm"
  }
  transform(value: any, args?: any): any {
    return `${value} ${this.Unit}`;
  }

}
