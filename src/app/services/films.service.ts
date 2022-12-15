import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { SwapiListResponse } from '../models/swapi-list-response.model';
import { SwapiService } from './swapi.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends SwapiService<Film> {

  constructor(private client: HttpClient){
    super(client);
    this.routePath = "films";
  }

  getFilms(): Observable<SwapiListResponse<Film>> {
    return super.get();
  }

  getFilmById(id: string): Observable<Film> {
    return super.getById(id);
  }

}
