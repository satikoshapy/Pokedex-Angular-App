import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.css'
})
export class HeartComponent implements OnInit{
  faHeart = faHeart;

  constructor(){}

  ngOnInit(): void {
    
  }

}
