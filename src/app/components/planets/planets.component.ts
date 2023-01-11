import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';
import { SwhappyService } from 'src/app/services/swhappy.service';
import { PaginatedComponent } from '../paginated-component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  host: {
    class: "expand"
  }
})
export class PlanetsComponent extends PaginatedComponent<Planet> implements OnInit {

  constructor(private api: SwhappyService) {
    super(api, api.getPlanets);
   }

  ngOnInit() {
    this.callApi(this.pagination.pageNum);
  }
}
