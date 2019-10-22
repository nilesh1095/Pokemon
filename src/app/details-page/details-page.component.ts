import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { ActivatedRoute, Router } from '@angular/router';

import CONSTANTS from '../constants'

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.less']
})
export class DetailsPageComponent implements OnInit {
  isDataTrue: boolean = false;
  pokemonName: string;
  stats: {};
  hp: number;
  attack: number;
  defence: number;
  speed: number;
  specialAttack: number;
  specialDefence: number
  height: number;
  weight: number;
  abilities: string;
  moves: number;
  captureRate: number;
  eggGroups: string;
  growthRate: number;
  happiness: number;
  description: string;
  imageUrl:string;
  types: [];
  isImageLoading:boolean = true;
  TYPE_COLORS = CONSTANTS.TYPE_COLORS;
  constructor(private detailsService: DetailsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.getPokemons(params['pokemonName'])
      })
  }
  getPokemons(pokemonName: string) {
    this.detailsService.getPokemonDetails(pokemonName)
      .subscribe(data => {
        this.initializePokemonDetails(data)
      },
        err => {
          if (err.status === 404) {
            this.router.navigate(['/errorPage'])
          }
        })
    this.detailsService.getPokemonSpeciesData(pokemonName)
      .subscribe(data => {
        this.initializeSpeciesData(data)
      },
        err => console.log('HTTP Error', err))
  }
  initializePokemonDetails(data) {
    this.isImageLoading=true
    this.isDataTrue = true
    this.pokemonName = data.name
    this.imageUrl = CONSTANTS.API.IMAGEBASEURL+this.pokemonName+'.gif?raw=true'
    data.stats.forEach((ele) => {
      if (ele.stat.name === "hp") {
        this.hp = ele.base_stat
      } else if (ele.stat.name === "attack") {
        this.attack = ele.base_stat
      } else if (ele.stat.name === "defense") {
        this.defence = ele.base_stat
      } else if (ele.stat.name === "speed") {
        this.speed = ele.base_stat
      } else if (ele.stat.name === "special-attack") {
        this.specialAttack = ele.base_stat
      } else {
        this.specialDefence = ele.base_stat
      }
    })
    this.height = data.height
    this.weight = data.weight
    this.types = data.types.map(ele => {
      let temp = {
        name: ele.type.name,
        color: this.TYPE_COLORS[ele.type.name]
      }
      return temp
    })
    this.abilities = data.abilities[0].ability.name + ', ' + data.abilities[1].ability.name
    this.moves = data.moves.length
  }
  initializeSpeciesData(data) {
    data.flavor_text_entries.forEach(e => {
      if (e.language.name === 'en') {
        this.description = e.flavor_text
      }
    })
    this.captureRate = data.capture_rate
    this.eggGroups = data.egg_groups[0].name
    this.growthRate = data.growth_rate.name
    this.happiness = data.base_happiness
  }
}
