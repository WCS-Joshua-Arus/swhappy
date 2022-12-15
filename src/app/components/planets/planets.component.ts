import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  host: {
    class: "expand"
  }
})
export class PlanetsComponent implements OnInit {

  planets? : Planet[];

  constructor(private api: SwhappyService) { }

  ngOnInit() {
    this.api.getPlanets().subscribe((response) => this.planets = response.results);
  }

  getId(url: string)
  {
    return this.api.extractIdFromUrl(url);
  }
}
