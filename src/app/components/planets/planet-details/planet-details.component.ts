import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { People } from 'src/app/models/people.model';
import { Planet } from 'src/app/models/planet.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css'],
  host: {
    class: "expand"
  }
})
export class PlanetDetailsComponent implements OnInit {

  planet?: Planet;

  relationsLoading = 0;

  peoples: People[] = [];
  films: Film[] = [];

  constructor(
    private api: SwhappyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id : string | null = params.get("id");
      if (id == null)
        this.router.navigate(["films"]);

      this.api.getPlanetById(id!).subscribe((planet) => {
        this.planet = planet;

        planet.residents.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getPeopleById(id).subscribe({
            next: (entity) => {this.peoples.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

        planet.films.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getFilmById(id).subscribe({
            next: (entity) => {this.films.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });


      });
    });
  }

}
