import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SwapiListResponse } from '../models/swapi-list-response.model';

@Injectable({
  providedIn: 'root'
})
export class SwapiService<T> {

  cache: any = {};
  cacheAll : any = {};
  routePath? : string;

  constructor(
    private http: HttpClient
  ) {
  }

  get(pageNum : string): Observable<SwapiListResponse<T>> {
    if (!this.cacheAll[pageNum])
    {
      this.cacheAll[pageNum] =  this.http
      .get<SwapiListResponse<T>>(environment.urls.apiBaseUrl + this.routePath?.toLowerCase() + "?page=" + pageNum)
      .pipe(shareReplay(1),);
    }
    return this.cacheAll[pageNum];
  }

  getById(id: string): Observable<T> {
    if (!this.cache[id])
    {
      this.cache[id] = this.http
        .get<T>(environment.urls.apiBaseUrl + this.routePath?.toLowerCase() + "/" + id)
        .pipe(shareReplay(1),);
    }
    return this.cache[id];
  }
}
