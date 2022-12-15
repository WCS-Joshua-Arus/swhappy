import { Component, OnInit } from '@angular/core';
import { SwhappyService } from 'src/app/services/swhappy.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loading = true;

  constructor(private api : SwhappyService) { }

  ngOnInit() {
    this.api.loadingStatus.subscribe((status) => this.loading = status);
  }

}
