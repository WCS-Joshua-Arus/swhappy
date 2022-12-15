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
          this.api.getPeopleById(id).subscribe(
            (entity) => this.peoples.push(entity),
            (error) => {},
            () => {this.relationsLoading--}
          );
        });

        film.planets.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getPlanetById(id).subscribe(
            (entity) => this.planets.push(entity),
            (error) => {},
            () => {this.relationsLoading--}
          );
        });

        film.species.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getSpecieById(id).subscribe(
            (entity) => this.species.push(entity),
            (error) => {},
            () => {this.relationsLoading--}
          );
        });

        film.starships.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getStarshipById(id).subscribe(
            (entity) => this.starship.push(entity),
            (error) => {},
            () => {this.relationsLoading--}
          );
        });

        film.vehicles.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getVehicleById(id).subscribe(
            (entity) => this.vehicles.push(entity),
            (error) => {},
            () => {this.relationsLoading--}
          );
        });

      });
    });
  }

}
