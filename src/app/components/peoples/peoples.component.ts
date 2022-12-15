import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css'],
  host: {
    class: "expand"
  }
})
export class PeoplesComponent implements OnInit {

  peoples?: People[];

  constructor(private api: SwhappyService) { }

  ngOnInit() {
    this.api.getPeoples().subscribe((response) => this.peoples = response.results);
  }

  getId(url: string)
  {
    return this.api.extractIdFromUrl(url);
  }
}
