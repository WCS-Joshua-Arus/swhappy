import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/models/starship.model';
import { SwhappyService } from 'src/app/services/swhappy.service';
import { PaginatedComponent } from '../paginated-component';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
  host: {
    class: "expand"
  }
})
export class StarshipsComponent extends PaginatedComponent<Starship> implements OnInit {

  constructor(private api: SwhappyService) {
    super(api, api.getStarships);
  }

  ngOnInit() {
    this.callApi(this.pagination.pageNum);
  }
}
