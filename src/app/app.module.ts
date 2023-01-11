import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FilmDetailsComponent } from './components/films/film-details/film-details.component';
import { FilmsComponent } from './components/films/films.component';
import { IndexComponent } from './components/index/index.component';
import { PeopleDetailsComponent } from './components/peoples/people-details/people-details.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { PlanetDetailsComponent } from './components/planets/planet-details/planet-details.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpecieDetailsComponent } from './components/species/specie-details/specie-details.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipDetailsComponent } from './components/starships/starship-details/starship-details.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehicleDetailsComponent } from './components/vehicles/vehicle-details/vehicle-details.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SpecieSummaryComponent } from './components/species/specie-summary/specie-summary.component';
import { FilmSummaryComponent } from './components/films/film-summary/film-summary.component';
import { PeopleSummaryComponent } from './components/peoples/people-summary/people-summary.component';
import { PlanetSummaryComponent } from './components/planets/planet-summary/planet-summary.component';
import { StarshipSummaryComponent } from './components/starships/starship-summary/starship-summary.component';
import { VehicleSummaryComponent } from './components/vehicles/vehicle-summary/vehicle-summary.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
      FilmDetailsComponent,
      FilmsComponent,
      FilmSummaryComponent,
      IndexComponent,
      LoadingComponent,
      PeopleDetailsComponent,
      PeoplesComponent,
      PeopleSummaryComponent,
      PlanetDetailsComponent,
      PlanetsComponent,
      PlanetSummaryComponent,
      SpecieDetailsComponent,
      SpeciesComponent,
      SpecieSummaryComponent,
      StarshipDetailsComponent,
      StarshipsComponent,
      StarshipSummaryComponent,
      VehicleDetailsComponent,
      VehiclesComponent,
      VehicleSummaryComponent,
      PaginationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
