import { Role } from './role';

export class User {
    usersId: string;
    name: string;
    lastName: string;
    roles: Role[];

    constructor(name: string, lastName: string){
        this.name = name;
        this.lastName = lastName;
    }
}