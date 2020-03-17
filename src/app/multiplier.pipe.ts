import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier'
})
export class MultiplierPipe implements PipeTransform {

  transform(value: any, multiply: string): any {
    let mul = parseFloat(multiply);
    return mul * value
  }

}
