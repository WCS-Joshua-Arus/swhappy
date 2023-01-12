import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { People } from 'src/app/models/people.model';
import { Planet } from 'src/app/models/planet.model';
import { Specie } from 'src/app/models/specie.model';
import { Starship } from 'src/app/models/starship.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css'],
  host: {
    class: "expand"
  }
})
export class PeopleDetailsComponent implements OnInit {

  people?: People;

  homeworld?: Planet;
  homeworldId?: string;

  relationsLoading = 0;

  films: Film[] = [];
  peoples: People[] = [];
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
        this.router.navigate(["peoples"]);

      this.api.getPeopleById(id!).subscribe((people) => {
        this.people = people;

        this.homeworldId = this.api.extractIdFromUrl(people.homeworld);
        this.api.getPlanetById(this.homeworldId).subscribe((planet) => this.homeworld = planet);

        people.films.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getFilmById(id).subscribe({
            next: (entity) => {this.films.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

        people.species.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getSpecieById(id).subscribe({
            next: (entity) => {this.species.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

        people.starships.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getStarshipById(id).subscribe({
            next: (entity) => {this.starship.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

        people.vehicles.forEach((url) => {
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
