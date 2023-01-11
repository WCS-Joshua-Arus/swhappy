import { SwapiListResponse } from "../models/swapi-list-response.model";
import { SwhappyService } from "../services/swhappy.service";
import { Pagination } from "./pagination/pagination";

export class PaginatedComponent<T> {

  loading: boolean = false;
  list : T[];
  pagination : Pagination;

  constructor(private service : SwhappyService, private methodName : Function) {
    this.list = new Array<T>();
    this.pagination = new Pagination();
  }

  callApi(pageNum : string)
  {
    this.loading = true;
    this.methodName.bind(this.service)(pageNum).subscribe((response : SwapiListResponse<T>) => {
      this.list.length = 0;
      response.results.forEach((r) => this.list.push(r));
      this.updatePaginationFromResponse(response, pageNum);
      this.loading = false;
    });
  }

  updatePaginationFromResponse(response : SwapiListResponse<T>, pageNum : string)
  {
    this.pagination.pageNum = pageNum;
    this.pagination.nextPage = this.extractPageNumberFromUrl(response.next);
    this.pagination.previousPage = this.extractPageNumberFromUrl(response.previous);
    this.loading = false;
  }

  extractPageNumberFromUrl(url: string) : string | undefined
  {
    if (url == null)
      return undefined;
    let parts = url.split("=").reverse();
    for(let part of parts)
    {
      if (part != "")
        return part;
    }
    return "";
  }

  getId(url: string)
  {
    return this.service.extractIdFromUrl(url);
  }
}
