import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specie } from '../models/specie.model';
import { SwapiListResponse } from '../models/swapi-list-response.model';
import { SwapiService } from './swapi.service';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService  extends SwapiService<Specie> {

  constructor(private client: HttpClient){
    super(client);
    this.routePath = "species";
  }

  getSpecies(): Observable<SwapiListResponse<Specie>> {
    return this.get();
  }

  getSpecieById(id: string): Observable<Specie> {
    return this.getById(id);
  }
}
