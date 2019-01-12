import { Building, Service } from './index';

export interface Invoice {
    invoicesId: string
    year: number;
    month: number;
    ammount: number;
    dueDate: Date;
    paidDate: Date;
    service: Service;
    building: Building;
}