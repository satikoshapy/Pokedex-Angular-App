import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../Pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent 	implements OnInit {
  @Input() pokemon!:Pokemon;
  @Output() choosePokemonClick:EventEmitter<Pokemon> = new EventEmitter();

  constructor() { }
  ngOnInit(): void {

    console.log('PokemonsComponent initialized');
  }

  onClick(pokemon:Pokemon){
      this.choosePokemonClick.emit(pokemon);
  }
}
