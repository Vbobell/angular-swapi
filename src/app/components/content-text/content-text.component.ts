import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[content-text]',
  templateUrl: './content-text.component.html',
  styleUrls: ['./content-text.component.scss']
})
export class ContentTextComponent implements OnInit {

  @Input() item: object;
  constructor() {
  }

  ngOnInit() {

  }

}
