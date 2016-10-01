import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _title = 'app works!';
  get title() {

    return this._title + "!";
  }
  set title(value) {
    this._title = value;
  }

}

var a = new AppComponent();
a.title = '111';
var b = a.title;
