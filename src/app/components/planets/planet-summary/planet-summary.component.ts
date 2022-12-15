import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-planet-summary',
  templateUrl: './planet-summary.component.html',
  styleUrls: ['./planet-summary.component.css'],
  host: {
    class: "bloc"
  }
})
export class PlanetSummaryComponent implements OnInit {

  @Input() planet!: Planet;

  constructor(private service : SwhappyService) { }

  ngOnInit() {
  }

  getPlanetId()
  {
    return this.service.extractIdFromUrl(this.planet.url);
  }

}
