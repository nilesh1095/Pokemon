import { Component, OnInit } from '@angular/core';

import CONSTANTS from '../../constants'

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less']
})
export class DescriptionComponent implements OnInit {
  bannerText:string;
  constructor() { }

  ngOnInit() {
    this.bannerText = CONSTANTS.TEXT.BANNERTEXT
  }

}
