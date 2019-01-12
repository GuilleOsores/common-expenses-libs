import { Role } from './role';

export interface User {
    usersId: string;
    name: string;
    lastName: string;
    roles: Role[];
}