import { Component, OnInit } from '@angular/core';
import { Specie } from 'src/app/models/specie.model';
import { SwhappyService } from 'src/app/services/swhappy.service';
import { PaginatedComponent } from '../paginated-component';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
  host: {
    class: "expand"
  }
})
export class SpeciesComponent extends PaginatedComponent<Specie> implements OnInit {

  constructor(private api: SwhappyService) {
    super(api, api.getSpecies);
  }

  ngOnInit() {
    this.callApi(this.pagination.pageNum);
  }

}
