import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchWord = new EventEmitter<string>();
  keyWord = '';
  counter = 0;
  isHighlight = false;
  fontSize = 24;

  constructor() { }

  ngOnInit(): void {
  }

  searchAction(event: MouseEvent): void {
    console.log(event);
    this.searchWord.emit(this.keyWord);
    if (event.altKey === true) {
      this.isHighlight = true;
      this.fontSize += 2;
    }
  }

  keywordInput(event: InputEvent): void {
    // console.log(event);
    console.log('counter: ' + (event.target as HTMLButtonElement).value);
    this.counter = +((event.target as HTMLButtonElement).value) + 1;
  }
}

