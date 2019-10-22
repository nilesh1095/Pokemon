import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import CONSTANTS from '../constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  pokemonName:string
  aboutText:string
  constructor( private router: Router) { }

  ngOnInit() {
    this.aboutText = CONSTANTS.TEXT.ABOUTTEXT
  }
  onSubmit(form: NgForm) {
    this.pokemonName = form.value.pokemonName.toLowerCase()
    this.router.navigate(['/details',this.pokemonName])
    form.reset()
  }
}
