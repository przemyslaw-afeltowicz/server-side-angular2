import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FilmRoutingModule } from './films-routing.module';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import { PlayerComponent } from './components/player/player.component';

import { FilmsService } from './services/films.service';

@NgModule({
  imports: [
    SharedModule,
    FilmRoutingModule
  ],
  declarations: [
    FilmsComponent,
    FilmComponent,
    PlayerComponent
  ],
  providers: [FilmsService]
})
export class FilmsModule { }
