import {IListCocktailModel} from '../models';

export function transformData(items: IListCocktailModel) {
  const arr = [];
  Object.values(items).forEach((att) => {
    const a = Object.values(att);
    for (let i = 0; i < a.length; i++) {
      arr.push(Object.values(a[i]).toString());
    }
  });
  return arr;
}
