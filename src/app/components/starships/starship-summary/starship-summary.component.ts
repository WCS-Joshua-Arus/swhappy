import { Component, Input, OnInit } from '@angular/core';
import { Starship } from 'src/app/models/starship.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-starship-summary',
  templateUrl: './starship-summary.component.html',
  styleUrls: ['./starship-summary.component.css'],
  host: {
    class: "bloc"
  }
})
export class StarshipSummaryComponent implements OnInit {

  @Input() starship!: Starship;

  constructor(private service : SwhappyService) { }

  ngOnInit() {
  }

  getStarshipId()
  {
    return this.service.extractIdFromUrl(this.starship.url);
  }

}
