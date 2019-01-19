import { Role } from './role';

export interface User {
    usersId: string;
    user: string,
    password: string,
    name: string;
    lastName: string;
    roles: Role[];
}