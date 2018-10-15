import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args?: string): any {
    if (!value || !args) {
      return value;
    }

    return value.filter((item) => {
      return (item.first_name.toLowerCase().indexOf(args.toLowerCase()) !== -1 || item.last_name.toLowerCase().indexOf(args.toLowerCase()) !== -1);
    });
  }

}
