import { User } from './user';
import { Permission } from './permission';
export class Role {
    rolesId: string;
    name: string;
    users?: User[];
    permission: Permission[];
}