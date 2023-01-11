export class SwapiListResponse<T> {

    constructor(
        public count: number,
        public previous: string,
        public next: string,
        public results: Array<T>
    ){}
}
