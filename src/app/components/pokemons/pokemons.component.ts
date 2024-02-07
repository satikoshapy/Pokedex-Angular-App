import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../Pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent 	implements OnInit {
  @Input() pokemon!:Pokemon;

  constructor() { }
  ngOnInit(): void {

    console.log('PokemonsComponent initialized');
  }
}
