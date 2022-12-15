import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "films",
    component: FilmsComponent
  },
  {
    path: "peoples",
    component: PeoplesComponent
  },
  {
    path: "planets",
    component: PlanetsComponent
  },
  {
    path: "species",
    component: SpeciesComponent
  },
  {
    path: "starships",
    component: StarshipsComponent
  },
  {
    path: "vehicles",
    component: VehiclesComponent
  },
  {
    path: "films/:id",
    component: FilmDetailsComponent
  },
  {
    path: "peoples/:id",
    component: PeopleDetailsComponent
  },
  {
    path: "planets/:id",
    component: PlanetDetailsComponent
  },
  {
    path: "species/:id",
    component: SpecieDetailsComponent
  },
  {
    path: "starships/:id",
    component: StarshipDetailsComponent
  },
  {
    path: "vehicles/:id",
    component: VehicleDetailsComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
