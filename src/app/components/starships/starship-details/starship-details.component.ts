import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { People } from 'src/app/models/people.model';
import { Starship } from 'src/app/models/starship.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css'],
  host: {
    class: "expand"
  }
})
export class StarshipDetailsComponent implements OnInit {

  starship?: Starship

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

      this.api.getStarshipById(id!).subscribe((starship) => {
        this.starship = starship;

        starship.films.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getFilmById(id).subscribe(
            (entity) => this.films.push(entity),
            (error) => {},
            () => {this.relationsLoading--}
          );
        });

        starship.pilots.forEach((url) => {
          this.relationsLoading++;
          let id = this.api.extractIdFromUrl(url);
          this.api.getPeopleById(id).subscribe(
            (entity) => this.peoples.push(entity),
            (error) => {},
            () => {this.relationsLoading--}
          );
        });

      });
    });
  }

}
