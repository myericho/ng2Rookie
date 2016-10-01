import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', //代表 tag 名稱叫 app-header ，與css撰擇器相同
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web!!!!';
  titleUrl  = "http://blog.miniasp.com/";
  subtitle = "記載著 Will 在網路世界的學習心得與技術分享";
  constructor() { }

  ngOnInit() {
  }

}
