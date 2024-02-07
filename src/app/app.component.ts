import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './Pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pokedex-angular-app';
  faHeart = faHeart;
  pokemons:Pokemon[] = [];


  constructor(private pokemonService:PokemonService){

  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((result) => {
      for (let i = 0; i < result.results.length; i++) {
        let pokemonUrl = result.results[i].url;
        console.log(pokemonUrl);
        
        this.pokemonService.getPokemonByUrl(pokemonUrl).subscribe((pokemon:Pokemon) => {
          this.pokemons.push(pokemon);
        });
      }
    });
  }

}

