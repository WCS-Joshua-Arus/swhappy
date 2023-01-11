import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SwapiListResponse } from '../models/swapi-list-response.model';
import { Vehicle } from '../models/vehicle.model';
import { SwapiService } from './swapi.service';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService  extends SwapiService<Vehicle> {

  constructor(private client: HttpClient){
    super(client);
    this.routePath = "vehicles";
  }

  getVehicles(pageNum: string): Observable<SwapiListResponse<Vehicle>> {
    return this.get(pageNum);
  }

  getVehicleById(id: string): Observable<Vehicle> {
    return this.getById(id);
  }
}
