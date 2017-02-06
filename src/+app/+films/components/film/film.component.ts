import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { Film } from "../../model/film";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  id: number;
  film: Film;

  constructor(private _route: ActivatedRoute, private _service: FilmsService, @Inject('req') req: any ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.film = this._service.getFilm(this.id);
  }

}
