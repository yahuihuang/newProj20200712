import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchWord = new EventEmitter<string>();
  keyWord = '';
  constructor() { }

  ngOnInit(): void {
  }

  searchAction($event): void {
    console.log($event);
    this.searchWord.emit(this.keyWord);
  }
}
