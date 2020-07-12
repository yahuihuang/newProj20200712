import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './articles/Article';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '這是標題';
  subtitle = 'A place to share your <u class="knowledge">knowledge</u>.';
  mySearchWord = '';
  data$: Observable<Article[]>;

  constructor(private datasvc: DataService) {
    this.data$ = this.datasvc.load();

    console.table(this.data$);
   }

  searchWordAction(searchWord: string): void {
    console.log('取得搜尋字串: ' + searchWord);
    this.mySearchWord = searchWord;
  }
}
