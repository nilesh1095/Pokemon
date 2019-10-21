import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import CONSTANTS from '../constants'


@Injectable({
  providedIn: 'root'
})
export class DetailsService{
  baseUrl:string = CONSTANTS.API.BASEURL
  constructor(private http: HttpClient) {}
  
  getPokemonDetails(pokemonName:string){
    return this.http.get(this.baseUrl+'pokemon/'+pokemonName+'/')
  }
  getPokemonSpeciesData(pokemonName:string){
    return this.http.get(this.baseUrl+'pokemon-species/'+pokemonName+'/')
  }
}
