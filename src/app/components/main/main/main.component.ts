import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { Pokemon } from '../../../Pokemon'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent 	implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  pokemon!: Pokemon;

  

  constructor(private pokemonService: PokemonService) {
    
   }


  ngOnInit(): void {
    this.pokemonService.getOnePokemon().subscribe((pokemon) => {
      this.pokemon = pokemon;
    
  })

}
}
