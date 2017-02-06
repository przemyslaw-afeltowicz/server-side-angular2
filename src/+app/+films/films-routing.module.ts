import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilmComponent } from './components/film/film.component';

import { FilmsComponent } from './components/films/films.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'films', component: FilmsComponent },
      { path: 'film/:id', component: FilmComponent },
    ])
  ]
})
export class FilmRoutingModule { }
