import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _title = 'app works!';
  keyword: string = 'test';

  doSearch(keyword:string) {
     this.keyword = keyword;
  }

  get title() {

    return this._title + "!";
  }
  set title(value) {
    this._title = value;
  }

}
