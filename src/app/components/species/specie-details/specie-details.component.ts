import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { People } from 'src/app/models/people.model';
import { Planet } from 'src/app/models/planet.model';
import { Specie } from 'src/app/models/specie.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-specie-details',
  templateUrl: './specie-details.component.html',
  styleUrls: ['./specie-details.component.css'],
  host: {
    class: "expand"
  }
})
export class SpecieDetailsComponent implements OnInit {
  specie?: Specie;

  relationsLoading = 0;

  homeworld?: Planet;
  homeworldId?: string;

  peoples: People[] = [];
  films: Film[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: SwhappyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      let specieName = param.get("id") ?? "";
      this.service.getSpecieById(specieName).subscribe((specie) => {
        this.specie = specie;

        this.homeworldId = this.service.extractIdFromUrl(specie.homeworld);
        this.service.getPlanetById(this.homeworldId).subscribe((planet) => this.homeworld = planet);

        specie.films.forEach((url) => {
          this.relationsLoading++;
          let id = this.service.extractIdFromUrl(url);
          this.service.getFilmById(id).subscribe({
            next: (entity) => {this.films.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

        specie.people.forEach((url) => {
          this.relationsLoading++;
          let id = this.service.extractIdFromUrl(url);
          this.service.getPeopleById(id).subscribe({
            next: (entity) => {this.peoples.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });
      });
    });
  }

}
