import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-vehicle-summary',
  templateUrl: './vehicle-summary.component.html',
  styleUrls: ['./vehicle-summary.component.css'],
  host: {
    class: "bloc"
  }
})
export class VehicleSummaryComponent implements OnInit {

  @Input() vehicle!: Vehicle;

  constructor(private service : SwhappyService) { }

  ngOnInit() {
  }

  getVehicleId()
  {
    return this.service.extractIdFromUrl(this.vehicle.url);
  }

}
