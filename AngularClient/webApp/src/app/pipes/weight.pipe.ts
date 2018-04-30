import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  readonly Unit:string;
  constructor(){
    this.Unit="kg";
  }
  transform(value: any, args?: any): any {
    return `${value} ${this.Unit}`;
  }

}
