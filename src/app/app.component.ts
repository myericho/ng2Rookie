import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _title = 'app works!';
  keyword: string = 'test';

  constructor(private dataservc: DataService ){

  }

  doSearch(keyword: string) {
    this.keyword = keyword;
  }



  // get title() {

  //   return this._title + "!";
  // }
  // set title(value) {
  //   this._title = value;
  // }

}
