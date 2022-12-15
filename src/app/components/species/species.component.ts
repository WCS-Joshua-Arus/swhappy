import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/models/specie.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
  host: {
    class: "expand"
  }
})
export class SpeciesComponent implements OnInit {

  species?: Specie[];

  constructor(private api: SwhappyService) { }

  ngOnInit() {
    this.api.getSpecies().subscribe((response) => this.species = response.results);
  }

  getId(url: string)
  {
    return this.api.extractIdFromUrl(url);
  }
}
