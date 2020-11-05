export class Address {

    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;

    constructor() {
        this.geo = new Geo();
    }
}

export class Geo{
    lat: number;
    lng: number

    constructor(){

    }
}