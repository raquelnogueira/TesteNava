import { Address } from './address.model';
import { Company } from './company.model';

export class User {

    id: number;
    name: string;
    username: string;
    email: string;
    phone: number;
    website: string;
    flagFavorite: boolean;
    address: Address;
    company: Company;

    constructor(){
        this.company = new Company();
        this.address = new Address();
        this.flagFavorite = false;
    }
}