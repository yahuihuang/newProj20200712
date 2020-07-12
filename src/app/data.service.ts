import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './articles/Article';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  load(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/listdata.json');
  }

   searchArticles(originlist: Article[], keyword: string): Article[] {
    let list;
    if (keyword.trim().length > 0) {
      console.log('keyword: ' + keyword);
      list = originlist.filter(article => article.title.indexOf(keyword) !== -1);
    } else {
      list = originlist;
    }
    return list;
  }
}
