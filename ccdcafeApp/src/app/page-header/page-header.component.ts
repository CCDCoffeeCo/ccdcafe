import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header : {
      title : 'CCD CAFE From Seed to Cup!,
      strapline : 'There are two Cafe House - "Golden Age Cafe & Roaster" in China,one is in Beijing address as below:'
    },
    sidebar : CCD CAFE - You personal customized roaster and best coffee for you!Could you please submit the survey and let's give you best coffee in our Cafe House or mail your address!'
  };

}
