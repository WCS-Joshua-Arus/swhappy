import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { SwhappyService } from 'src/app/services/swhappy.service';
import { PaginatedComponent } from '../paginated-component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  host: {
    class: "expand"
  }
})
export class FilmsComponent extends PaginatedComponent<Film> implements OnInit {

  constructor(private api: SwhappyService) {
    super(api, api.getFilms);
   }

  ngOnInit() {
    this.callApi(this.pagination.pageNum);
  }

}
