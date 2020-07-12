import { Component, OnInit, Input } from '@angular/core';
import { Article } from './Article';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  // data$: Observable<Article[]>;
  @Input() data$: Observable<Article[]>;
  @Input() list: Article[];

  constructor() {

  }
  /*
  constructor(private datasvc: DataService) {
    this.data$ = this.datasvc.load();

    console.table(this.data$);
   }*/

  ngOnInit(): void {
  }

}
