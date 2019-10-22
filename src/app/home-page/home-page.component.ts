import { Component, OnInit } from '@angular/core';
import { HomePageService } from './home-page-service.service';
import CONSTANTS from '../../app/constants'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  pokemonData: [];
  isDescriptionShown: boolean = true;
  url: string = CONSTANTS.API.GETPOKEMONS
  nextUrl: string = null;
  previousUrl: string = null;
  isNextActive: boolean = true;
  isPreviousActive: boolean = false;
  constructor(private HomePageService: HomePageService) { }

  ngOnInit() {
    this.fetchPokemons(this.url)
  }
  onCloseClicked() {
    this.isDescriptionShown = false;
  }
  onNextClicked() {
    this.fetchPokemons(this.nextUrl)
  }
  onPreviousClicked() {
    this.fetchPokemons(this.previousUrl)
  }
  fetchPokemons(url) {
    this.HomePageService.getPokemons(url)
      .subscribe((data: { results: [], next: string, previous: string }) => {
        this.pokemonData = data.results
        this.nextUrl = data.next
        this.previousUrl = data.previous
        this.isPreviousActive = this.previousUrl != null?true:false
        this.isNextActive = this.nextUrl != null?true:false
      })
  }
}
