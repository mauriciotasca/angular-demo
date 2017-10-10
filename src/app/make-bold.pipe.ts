import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeBold'
})
export class MakeBoldPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `<strong>${value}</strong>`;
  }

}
