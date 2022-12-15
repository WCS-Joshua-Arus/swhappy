export class SwapiListResponse<T> {

    constructor(
        public count: number,
        public results: Array<T>
    ){}
}
