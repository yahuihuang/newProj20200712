import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchWord = new EventEmitter<string>();
  keyWord = '';
  isHighlight = false;
  fontSize = 24;

  constructor() { }

  ngOnInit(): void {
  }

  searchAction(event: MouseEvent): void {
    console.log(event);
    if (event.altKey === true) {
      this.searchWord.emit(this.keyWord);
      this.isHighlight = true;
      this.fontSize += 2;
    }
  }
}
