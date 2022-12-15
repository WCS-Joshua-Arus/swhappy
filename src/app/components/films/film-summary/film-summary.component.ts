import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-film-summary',
  templateUrl: './film-summary.component.html',
  styleUrls: ['./film-summary.component.css'],
  host: {
    class: "bloc"
  }
})
export class FilmSummaryComponent implements OnInit {

  @Input() film!: Film;

  constructor(private service : SwhappyService) { }

  ngOnInit() {
  }

  getFilmId()
  {
    return this.service.extractIdFromUrl(this.film.url);
  }

}
