import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _title = 'app works!';
  keyword: string = 'test';
  doSearch($event: KeyboardEvent) {
       //$event.target 目前事件的物件
    let inputDom =  $event.target as HTMLInputElement;
    if ($event.keyCode == 13) {
     this.keyword = inputDom.value;
    }
  }

  get title() {

    return this._title + "!";
  }
  set title(value) {
    this._title = value;
  }

}
