import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, timeout } from 'rxjs';

import { environment } from 'src/environments/environment';
import { SwapiListResponse } from '../models/swapi-list-response.model';

@Injectable({
  providedIn: 'root'
})
export class SwapiService<T> {

  cache: any = {};
  cacheAll : any = {};
  routePath? : string;
  timeout : number | undefined;

  constructor(private http: HttpClient) {
    this.timeout = environment.apiTimeout || undefined;
  }

  get(pageNum : string): Observable<SwapiListResponse<T>> {
    if (!this.cacheAll[pageNum])
    {
      let request = this.http.get<SwapiListResponse<T>>(environment.urls.apiBaseUrl + this.routePath?.toLowerCase() + "?page=" + pageNum);

      if (this.timeout)
      {
        request = request.pipe(timeout(this.timeout));
      }

      this.cacheAll[pageNum] = request.pipe(shareReplay(1),);
    }
    return this.cacheAll[pageNum];
  }

  getById(id: string): Observable<T> {
    if (!this.cache[id])
    {
      let request = this.http.get<T>(environment.urls.apiBaseUrl + this.routePath?.toLowerCase() + "/" + id);

      if (this.timeout)
      {
        request = request.pipe(timeout(this.timeout));
      }

      this.cache[id] = request.pipe(shareReplay(1),);
    }
    return this.cache[id];
  }
}
