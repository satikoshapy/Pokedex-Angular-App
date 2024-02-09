import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, species } from '../../../Pokemon';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{
 @Input() pokemon!: Pokemon;
 @Input() pokemonSpecies!: species;
  constructor() { }


  ngOnInit(): void {
    console.log(this.pokemonSpecies.flavor_text_entries[0].flavor_text)
  }
}
