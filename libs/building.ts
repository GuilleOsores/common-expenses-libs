import { Apartment } from './apartment';

export interface Building {
    buildingsId: string;
    name: string;
    address: string;
    commonExpensesAmmount: number;
    apartments: Apartment[];
}