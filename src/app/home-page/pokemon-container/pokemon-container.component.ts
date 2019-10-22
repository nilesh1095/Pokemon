import { Component, OnInit, Input } from '@angular/core';

import CONSTANTS from '../../constants'
import { DetailsService } from 'src/app/details-page/details.service';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.less']
})
export class PokemonContainerComponent implements OnInit {
  @Input() pokemon;
  imageUrl:string;
  isImageLoading:boolean=true
  TYPE_COLORS:{} = CONSTANTS.TYPE_COLORS
  types:[]
  constructor(private DetailsService:DetailsService) { }

  ngOnInit() {
    this.imageUrl = CONSTANTS.API.IMAGEBASEURL+this.pokemon.name+".gif?raw=true"
    this.DetailsService.getPokemonDetails(this.pokemon.name)
      .subscribe((data:{types:any})=>{
        this.types = data.types.map(ele => {
          let temp = {
            name: ele.type.name,
            color: this.TYPE_COLORS[ele.type.name]
          }
          return temp
        })
      })
  }
}
