import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../../Pokemon';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{
 @Input() pokemon!: Pokemon;

  constructor() { }


  ngOnInit(): void {
    
  }
}
