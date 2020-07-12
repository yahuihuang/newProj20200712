import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './articles/Article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  load(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/listdata.json');
  }
}
