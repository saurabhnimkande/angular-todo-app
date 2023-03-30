import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterData'})
export class FilterData implements PipeTransform {
  transform(array:[], type: string): any {
    return array.filter((el:{status:string}) => el?.status === type);
  }
}