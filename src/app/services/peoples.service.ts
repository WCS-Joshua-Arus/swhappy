import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';
import { SwapiListResponse } from '../models/swapi-list-response.model';
import { SwapiService } from './swapi.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends SwapiService<People> {

  constructor(private client: HttpClient){
    super(client);
    this.routePath = "people";
  }
  getPeoples(pageNum: string): Observable<SwapiListResponse<People>> {
    return this.get(pageNum);
  }

  getPeopleById(id: string): Observable<People> {
    return this.getById(id);
  }
}
