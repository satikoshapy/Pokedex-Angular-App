import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Pokemon, species } from '../Pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private onePokemonUrl = 'https://pokeapi.co/api/v2/pokemon/1/';
  private allPokemons = 'https://pokeapi.co/api/v2/pokemon'
  private pokemonSpeciesURl = 'https://pokeapi.co/api/v2/pokemon-species/';

  constructor(private http:HttpClient) { }

  ////////////GET BULBASAUR/////////////

  getOnePokemon(): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.onePokemonUrl)
  }
///////////////GET POKEMON BY URL///////////
  getPokemonByUrl(url:string): Observable<Pokemon>{
    return this.http.get<Pokemon>(url)
  }

  ///////////////GET LINKS FOR ALL POKEMONS///////////////////
  getAllPokemons(): Observable<any>{
    return this.http.get<any>(this.allPokemons)
  }

  /////////////////GET POKEMON SPECIES BY ID//////////////////////////////////////////
  getPokemonSpeciesByID(id:number): Observable<species>{
    return this.http.get<species>(this.pokemonSpeciesURl+id)
  }
}
