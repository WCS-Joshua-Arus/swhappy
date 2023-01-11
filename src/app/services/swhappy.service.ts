import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { People } from '../models/people.model';
import { Planet } from '../models/planet.model';
import { Specie } from '../models/specie.model';
import { Starship } from '../models/starship.model';
import { SwapiListResponse } from '../models/swapi-list-response.model';
import { Vehicle } from '../models/vehicle.model';
import { FilmsService } from './films.service';
import { PeopleService } from './peoples.service';
import { PlanetService } from './planets.service';
import { SpeciesService } from './species.service';
import { StarshipsService } from './starships.service';
import { VehiclesService } from './vehicles.service';

@Injectable({
  providedIn: 'root'
})
export class SwhappyService {

  private emittedCall = 0;
  private receivedCall = 0;

  private messageSource = new BehaviorSubject<boolean>(true);
  loadingStatus = this.messageSource.asObservable();

  constructor(
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private planetService: PlanetService,
    private speciesService: SpeciesService,
    private starshipsService: StarshipsService,
    private vehiclesService: VehiclesService
  ) {
  }

  getFilms(pageNum: string = '1'): Observable<SwapiListResponse<Film>> {
    return this.filmsService.getFilms(pageNum);
  }

  getFilmById(id: string): Observable<Film> {
    return this.filmsService.getFilmById(id);
  }

  getPeoples(pageNum: string = '1'): Observable<SwapiListResponse<People>> {
    return this.peopleService.getPeoples(pageNum);
  }

  getPeopleById(id: string): Observable<People> {
    return this.peopleService.getPeopleById(id);
  }

  getPlanets(pageNum: string = '1'): Observable<SwapiListResponse<Planet>> {
    return this.planetService.getPlanets(pageNum);
  }

  getPlanetById(id: string): Observable<Planet> {
    return this.planetService.getPlanetById(id);
  }

  getSpecies(pageNum: string = '1'): Observable<SwapiListResponse<Specie>> {
    return this.speciesService.getSpecies(pageNum);
  }

  getSpecieById(id: string): Observable<Specie> {
    return this.speciesService.getSpecieById(id);
  }

  getStarships(pageNum: string = '1'): Observable<SwapiListResponse<Starship>> {
    return this.starshipsService.getStarships(pageNum);
  }

  getStarshipById(id: string): Observable<Starship> {
    return this.starshipsService.getStarshipById(id);
  }

  getVehicles(pageNum: string = '1'): Observable<SwapiListResponse<Vehicle>> {
    return this.vehiclesService.getVehicles(pageNum);
  }

  getVehicleById(id: string): Observable<Vehicle> {
    return this.vehiclesService.getVehicleById(id);
  }

  extractIdFromUrl(url: string)
  {
    let parts = url.split("/").reverse();
    for(let part of parts)
    {
      if (part != "")
        return part;
    }
    return "";
  }

  increaseCallCount()
  {
    this.emittedCall++;
  }

  decreaseCallCount()
  {
    this.receivedCall++;

    if (this.emittedCall == this.receivedCall)
    {
      this.messageSource.next(false);
    }
  }
}
