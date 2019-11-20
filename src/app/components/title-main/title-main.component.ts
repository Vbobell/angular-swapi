import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[title-main]',
  templateUrl: './title-main.component.html',
  styleUrls: ['./title-main.component.scss']
})
export class TitleMainComponent implements OnInit {
  @Input() title: string;
  constructor() {
    
  }

  ngOnInit() {

  }

}
