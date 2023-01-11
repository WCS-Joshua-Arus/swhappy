import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet.model';
import { SwapiListResponse } from '../models/swapi-list-response.model';
import { SwapiService } from './swapi.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetService  extends SwapiService<Planet> {

  constructor(private client: HttpClient){
    super(client);
    this.routePath = "planets";
  }

  getPlanets(pageNum: string): Observable<SwapiListResponse<Planet>> {
    return this.get(pageNum);
  }

  getPlanetById(id: string): Observable<Planet> {
    return this.getById(id);
  }
}
