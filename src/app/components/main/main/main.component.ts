import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { Pokemon } from '../../../Pokemon'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent 	implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  @Input() selectedPokemon!: Pokemon;
  initialPokemon!: Pokemon;
  pokemon:Pokemon = this.selectedPokemon;

  

  constructor(private pokemonService: PokemonService) {
    
   }


  ngOnInit(): void {
    this.pokemonService.getOnePokemon().subscribe((pokemon) => {
      this.selectedPokemon = pokemon;
    
  })

}

// ngOnChanges(changes: SimpleChanges): void {
  
//     this.pokemon = this.selectedPokemon;
//     console.log("new change")
//     console.log(this.selectedPokemon);
    
//   }




}
