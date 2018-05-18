import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

//   transform(basicsal:any):number{
// return (basicsal + (basicsal*12%) +(basicsal*20%) );
//   }
}
