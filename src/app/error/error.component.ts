import { Component, OnInit } from '@angular/core';

import CONSTANTS from '../constants'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.less']
})
export class ErrorComponent implements OnInit {
  errorMessage:string;
  constructor() { }

  ngOnInit() {
    this.errorMessage = CONSTANTS.TEXT.ERRORMESSAGE
  }

}
