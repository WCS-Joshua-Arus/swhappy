import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { SwhappyService } from 'src/app/services/swhappy.service';
import { PaginatedComponent } from '../paginated-component';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  host: {
    class: "expand"
  }
})
export class VehiclesComponent extends PaginatedComponent<Vehicle> implements OnInit {

  constructor(private api: SwhappyService) {
    super(api, api.getVehicles);
  }

  ngOnInit() {
    this.callApi(this.pagination.pageNum);
  }
}
