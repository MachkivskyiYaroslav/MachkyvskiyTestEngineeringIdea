import { Pipe, PipeTransform } from '@angular/core';
import {IListCocktailModel} from '../models';

@Pipe({
  name: 'myPipe'
})
export class MyPipe implements PipeTransform {

  transform(items: IListCocktailModel): any {
    const arr = [];
    Object.values(items).forEach((att, index) => {
      const a = Object.values(att);
      for (let i = 0; i < a.length; i++) {
        arr.push(Object.values(a[i]).toString());
      }
    });
    return arr;
  }

}
