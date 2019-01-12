import { Permission } from './permission';

export interface Role {
    rolesId: string;
    name: string;
    permissions: Permission[];
}