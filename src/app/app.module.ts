// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SortingBoxComponent } from './components/sidebar/sorting-box/sorting-modal.component';
import { HeartComponent } from './components/main/heart/heart.component';
import { PokemonPhotoComponent } from './components/main/pokemon-photo/pokemon-photo.component';
import { StatisticsComponent } from './components/main/statistics/statistics.component';
import { InfoComponent } from './components/main/info/info.component';
import { MovesetComponent } from './components/main/moveset/moveset.component';
import { EvolutionComponent } from './components/main/evolution/evolution.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './components/main/main/main.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  //{ path: 'about', component: AboutComponent },
  // ... other route configurations
];

const routerOptions = {
  // additional configuration options go here
  useHash: true, // for hash-based routing
  enableTracing: true, // for debugging
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SortingBoxComponent,
    HeartComponent,
    PokemonPhotoComponent,
    StatisticsComponent,
    InfoComponent,
    MovesetComponent,
    EvolutionComponent,
    PokemonsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    [CarouselModule.forRoot(),],
    //[RouterModule.forRoot(routes)],
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
