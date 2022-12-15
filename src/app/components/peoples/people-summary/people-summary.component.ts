import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-people-summary',
  templateUrl: './people-summary.component.html',
  styleUrls: ['./people-summary.component.css'],
  host: {
    class: "bloc"
  }
})
export class PeopleSummaryComponent implements OnInit {

  @Input() people!: People;

  constructor(private service : SwhappyService) { }

  ngOnInit() {
  }

  getPeopleId()
  {
    return this.service.extractIdFromUrl(this.people.url);
  }

}
