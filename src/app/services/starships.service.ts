import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starship } from '../models/starship.model';
import { SwapiListResponse } from '../models/swapi-list-response.model';
import { SwapiService } from './swapi.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService  extends SwapiService<Starship> {

  constructor(private client: HttpClient){
    super(client);
    this.routePath = "starships";
  }

  getStarships(pageNum: string): Observable<SwapiListResponse<Starship>> {
    return this.get(pageNum);
  }

  getStarshipById(id: string): Observable<Starship> {
    return this.getById(id);
  }
}
