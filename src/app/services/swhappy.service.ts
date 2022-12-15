import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { People } from '../models/people.model';
import { Planet } from '../models/planet.model';
import { Specie } from '../models/specie.model';
import { Starship } from '../models/starship.model';
import { SwapiListResponse } from '../models/swapi-list-response.model';
import { Vehicle } from '../models/vehicle.model';
import { SwapiService } from './swapi.service';
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

  constructor(
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private planetService: PlanetService,
    private speciesService: SpeciesService,
    private starshipsService: StarshipsService,
    private vehiclesService: VehiclesService
  ) { }

  getFilms(): Observable<SwapiListResponse<Film>> {
    return this.filmsService.getFilms();
  }

  getFilmById(id: string): Observable<Film> {
    return this.filmsService.getFilmById(id);
  }

  getPeoples(): Observable<SwapiListResponse<People>> {
    return this.peopleService.getPeoples();
  }

  getPeopleById(id: string): Observable<People> {
    return this.peopleService.getPeopleById(id);
  }

  getPlanets(): Observable<SwapiListResponse<Planet>> {
    return this.planetService.getPlanets();
  }

  getPlanetById(id: string): Observable<Planet> {
    return this.planetService.getPlanetById(id);
  }

  getSpecies(): Observable<SwapiListResponse<Specie>> {
    return this.speciesService.getSpecies();
  }

  getSpecieById(id: string): Observable<Specie> {
    return this.speciesService.getSpecieById(id);
  }

  getStarships(): Observable<SwapiListResponse<Starship>> {
    return this.starshipsService.getStarships();
  }

  getStarshipById(id: string): Observable<Starship> {
    return this.starshipsService.getStarshipById(id);
  }

  getVehicles(): Observable<SwapiListResponse<Vehicle>> {
    return this.vehiclesService.getVehicles();
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
}
