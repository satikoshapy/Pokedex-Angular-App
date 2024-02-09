import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { Pokemon, species } from '../../../Pokemon'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent 	implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  @Input() selectedPokemon!: Pokemon;
  initialPokemon!: Pokemon;
  @Input() pokemonSpecies!:species;

  

  constructor(private pokemonService: PokemonService) {
    
   }


  ngOnInit(): void {
    this.pokemonService.getOnePokemon().subscribe((pokemon) => {
      this.selectedPokemon = pokemon;
    
      this.pokemonService.getPokemonSpeciesByID(this.selectedPokemon.id).subscribe((species) => {
        this.pokemonSpecies = species;})
      })
    
    


}

ngOnChanges(changes: SimpleChanges): void {
  
    //this.selectedPokemon = changes.selectedPokemon.currentValue;
    console.log("new change")
    console.log(this.selectedPokemon);
    
  }




}
