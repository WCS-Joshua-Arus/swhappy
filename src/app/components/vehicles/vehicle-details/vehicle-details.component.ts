import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { People } from 'src/app/models/people.model';
import { Vehicle } from 'src/app/models/vehicle.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
  host: {
    class: "expand"
  }
})
export class VehicleDetailsComponent implements OnInit {

  vehicle?: Vehicle;

  relationsLoading = 0;

  films: Film[] = [];
  peoples: People[] = [];

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

      this.api.getVehicleById(id!).subscribe((vehicle) => {
        this.vehicle = vehicle;

        vehicle.films.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getFilmById(id).subscribe({
            next: (entity) => {this.films.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

        vehicle.pilots.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getPeopleById(id).subscribe({
            next: (entity) => {this.peoples.push(entity); this.relationsLoading--},
            error: (error) => {this.relationsLoading--},
            complete: () => {}
          });
        });

      });
    });
  }
}
