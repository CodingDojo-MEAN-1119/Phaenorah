import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.chlorophyll();
    this.overgrow();
  }
  getPokemon() {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe((data: any) => {
    console.log('Bulbasaurs data', data);
    console.log(`${data.name}'s abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}.`);
  });
  }
  chlorophyll() {
    let chlorophyll = this._http.get('https://pokeapi.co/api/v2/ability/34/');
    chlorophyll.subscribe((data: any) => {
      console.log(`${data.pokemon.length} Pokemons have the ${data.name} ability!`);
    });
  }
  overgrow() {
    let overgrow = this._http.get('https://pokeapi.co/api/v2/ability/65/');
    overgrow.subscribe((data: any) => {
      console.log(`${data.pokemon.length} Pokemons have the ${data.name} ability!`);
    });
  }
}
