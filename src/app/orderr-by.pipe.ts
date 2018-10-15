import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderrBy'
})
export class OrderrByPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
