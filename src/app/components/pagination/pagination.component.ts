import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from './pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output() changePage : EventEmitter<string> = new EventEmitter<string>();
  @Input() pagination? : Pagination;

  constructor() { }

  ngOnInit() {
  }

  nextPage()
  {
    this.changePage.emit(this.pagination!.nextPage!);
  }

  previousPage()
  {
    this.changePage.emit(this.pagination!.previousPage!);
  }

}
