import { Action } from './action';

export interface Permission {
    program: string;
    action: Action;
}