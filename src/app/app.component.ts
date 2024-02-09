import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { PokemonService } from './services/pokemon.service';
import { Pokemon, species } from './Pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pokedex-angular-app';
  faHeart = faHeart;
  pokemons:Pokemon[] = [];
  selectedPokemon!:Pokemon;
  //initialPokemon!:Pokemon;
  pokemonSpecies!:species


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

    //this.initialPokemon = this.pokemons[0];
   
    
  }

  onSidetoMain(pokemon:Pokemon){
      this.selectedPokemon = pokemon;
      this.pokemonService.getPokemonSpeciesByID(pokemon.id).subscribe((species) => {
        this.pokemonSpecies = species;
      })
  }

}

