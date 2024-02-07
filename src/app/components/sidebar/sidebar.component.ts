import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Pokemon } from '../../Pokemon';
import { faFilter, faArrowDownUpAcrossLine} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  faFilter = faFilter;
  faSort = faArrowDownUpAcrossLine;
  @Input() pokemons: Pokemon[] = [];
  @Output() selectedPokemon:EventEmitter<Pokemon> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onChosenPokemon(pokemon:Pokemon){
      this.selectedPokemon.emit(pokemon);
  }



}
