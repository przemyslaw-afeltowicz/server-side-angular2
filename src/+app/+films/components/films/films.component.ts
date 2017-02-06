import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films = [];
  @Inject('req') req: any;

  constructor(private filmsService: FilmsService ) { }

  ngOnInit() {
    console.log(this.req);
    this.films = this.filmsService.getFilms();
  }

}
