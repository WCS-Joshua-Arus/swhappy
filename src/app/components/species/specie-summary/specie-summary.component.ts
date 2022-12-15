import { Component, Input, OnInit } from '@angular/core';
import { Specie } from 'src/app/models/specie.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-specie-summary',
  templateUrl: './specie-summary.component.html',
  styleUrls: ['./specie-summary.component.css'],
  host: {
    class: "bloc"
  }
})
export class SpecieSummaryComponent implements OnInit {

  @Input() specie!: Specie;

  constructor(private service : SwhappyService) { }

  ngOnInit() {
  }

  getSpecieId()
  {
    return this.service.extractIdFromUrl(this.specie.url);
  }

}
