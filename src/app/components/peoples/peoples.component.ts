import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { SwhappyService } from 'src/app/services/swhappy.service';
import { PaginatedComponent } from '../paginated-component';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css'],
  host: {
    class: "expand"
  }
})
export class PeoplesComponent extends PaginatedComponent<People> implements OnInit {

  constructor(private api: SwhappyService) {
    super(api, api.getPeoples);
  }

  ngOnInit() {
    this.callApi(this.pagination.pageNum);
  }
}
