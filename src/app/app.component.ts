import { Component } from '@angular/core';
import { SwhappyService } from './services/swhappy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swhappy';

  constructor(private api : SwhappyService)
  {
    // this.loadAll();
  }

  loadAll()
  {
    this.api.increaseCallCount();
    this.api.getFilms('1').subscribe((response) => {
      response.results.forEach((element) => {
        this.api.increaseCallCount();
        this.api.getFilmById(this.api.extractIdFromUrl(element.url)).subscribe(() => this.api.decreaseCallCount());
      });
      this.api.decreaseCallCount();
    });

    this.api.increaseCallCount();
    this.api.getPeoples('1').subscribe((response) => {
      response.results.forEach((element) => {
        this.api.increaseCallCount();
        this.api.getPeopleById(this.api.extractIdFromUrl(element.url)).subscribe(() => this.api.decreaseCallCount());
      });
      this.api.decreaseCallCount();
    });

    this.api.increaseCallCount();
    this.api.getPlanets('1').subscribe((response) => {
      response.results.forEach((element) => {
        this.api.increaseCallCount();
        this.api.getPlanetById(this.api.extractIdFromUrl(element.url)).subscribe(() => this.api.decreaseCallCount());
      });
      this.api.decreaseCallCount();
    });

    this.api.increaseCallCount();
    this.api.getSpecies('1').subscribe((response) => {
      response.results.forEach((element) => {
        this.api.increaseCallCount();
        this.api.getSpecieById(this.api.extractIdFromUrl(element.url)).subscribe(() => this.api.decreaseCallCount());
      });
      this.api.decreaseCallCount();
    });

    this.api.increaseCallCount();
    this.api.getStarships('1').subscribe((response) => {
      response.results.forEach((element) => {
        this.api.increaseCallCount();
        this.api.getStarshipById(this.api.extractIdFromUrl(element.url)).subscribe(() => this.api.decreaseCallCount());
      });
      this.api.decreaseCallCount();
    });

    this.api.increaseCallCount();
    this.api.getVehicles('1').subscribe((response) => {
      response.results.forEach((element) => {
        this.api.increaseCallCount();
        this.api.getVehicleById(this.api.extractIdFromUrl(element.url)).subscribe(() => this.api.decreaseCallCount());
      });
      this.api.decreaseCallCount();
    });
  }

  displaySmallNav = false;

  toggleNavbar() {
    this.displaySmallNav = !this.displaySmallNav;
  }
}
