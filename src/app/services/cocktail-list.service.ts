import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ICocktailModel} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CocktailListService {
  private cocktailList = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';


  constructor(private http: HttpClient) {
  }

  getAll(param): Observable<ICocktailModel[]> {
    const d = 'drinks';
    return this.http.get(`${this.cocktailList}${param}`).pipe(map(data => {
      const drinksList = data[d];
      return drinksList.map((drinks: any) => {
        return {strDrink: drinks.strDrink, strDrinkThumb: drinks.strDrinkThumb, idDrink: drinks.idDrink};
      });
    }));
  }
}
