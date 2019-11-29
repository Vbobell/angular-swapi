import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[content-image]',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss']
})
export class ContentImageComponent implements OnInit {

  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

}
