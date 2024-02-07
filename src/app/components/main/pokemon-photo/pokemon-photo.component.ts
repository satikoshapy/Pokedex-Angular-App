import { Component, OnInit, Input } from '@angular/core';
import {Pokemon } from '../../../Pokemon';

@Component({
  selector: 'app-pokemon-photo',
  templateUrl: './pokemon-photo.component.html',
  styleUrl: './pokemon-photo.component.css'
})
export class PokemonPhotoComponent 	implements OnInit {
  @Input() pokemon!: Pokemon;

  constructor() { }


  ngOnInit(): void {
  }
}
