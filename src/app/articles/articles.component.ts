import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './Article';
import { DataService } from '../data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  data$: Observable<Article[]>;

  constructor(private datasvc: DataService) {
    this.data$ = this.datasvc.load();

    console.table(this.data$);
   }

  ngOnInit(): void {
  }

}
