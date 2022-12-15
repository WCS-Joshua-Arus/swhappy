import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  host: {
    class: "expand"
  }
})
export class VehiclesComponent implements OnInit {
  vehicles?: Vehicle[];

  constructor(private api: SwhappyService) { }

  ngOnInit() {
    this.api.getVehicles().subscribe((response) => this.vehicles = response.results);
  }

  getId(url: string)
  {
    return this.api.extractIdFromUrl(url);
  }
}
