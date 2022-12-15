import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  host: {
    class: "expand"
  }
})
export class FilmsComponent implements OnInit {

  films?: Film[];

  constructor(private api: SwhappyService) { }

  ngOnInit() {
    this.api.getFilms().subscribe((response) => this.films = response.results);
  }

  getId(url: string)
  {
    return this.api.extractIdFromUrl(url);
  }
}
