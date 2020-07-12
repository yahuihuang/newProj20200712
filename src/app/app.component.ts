import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '這是標題';
  subtitle = 'A place to share your <u class="knowledge">knowledge</u>.';
  mySearchWord = '';

  searchWordAction(searchWord: string): void {
    alert('取得搜尋字串: ' + searchWord);
    this.mySearchWord = searchWord;
  }
}
