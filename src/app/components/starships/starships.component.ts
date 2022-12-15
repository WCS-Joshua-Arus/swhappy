import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/models/starship.model';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
  host: {
    class: "expand"
  }
})
export class StarshipsComponent implements OnInit {
  starships?: Starship[];

  constructor(private api: SwhappyService) { }

  ngOnInit() {
    this.api.getStarships().subscribe((response) => this.starships = response.results);
  }

  getId(url: string)
  {
    return this.api.extractIdFromUrl(url);
  }
}
