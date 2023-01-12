import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { People } from 'src/app/models/people.model';
import { Planet } from 'src/app/models/planet.model';
import { Specie } from 'src/app/models/specie.model';
import { Starship } from 'src/app/models/starship.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
  host: {
    class: "expand"
  }
})
export class FilmDetailsComponent implements OnInit {

  film?: Film;

  relationsLoading = 0;

  peoples: People[] = [];
  planets: Planet[] = [];
  species: Specie[] = [];
  starship: Starship[] = [];
  vehicles: Vehicle[] = [];

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

      this.api.getFilmById(id!).subscribe((film) => {
        this.film = film;

        film.characters.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getPeopleById(id).subscribe({
            next: (entity) => {this.peoples.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

        film.planets.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getPlanetById(id).subscribe({
            next: (entity) => {this.planets.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

        film.species.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getSpecieById(id).subscribe({
            next: (entity) => {this.species.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

        film.starships.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getStarshipById(id).subscribe({
            next: (entity) => {this.starship.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

        film.vehicles.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getVehicleById(id).subscribe({
            next: (entity) => {this.vehicles.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

      });
    });
  }

}
