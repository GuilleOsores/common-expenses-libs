import { Permission } from './permission';

export class Role {
    rolesId: string;
    name: string;
    permissions: Permission[];
}