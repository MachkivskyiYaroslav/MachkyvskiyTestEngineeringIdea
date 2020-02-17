import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IListCocktailModel} from '../models';

@Injectable({
  providedIn: 'root'
})
export class FilterListService {
  listURL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  constructor(private http: HttpClient) {
  }

  public getFilterList(): Observable<IListCocktailModel> {
    return this.http.get<IListCocktailModel>(this.listURL);
  }
}
