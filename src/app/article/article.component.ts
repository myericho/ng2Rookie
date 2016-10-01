import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {

  @Input() item: any;
  @Output() delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){

  }

  doDelete(item) {
    this.delete.emit(item);
  }
}
