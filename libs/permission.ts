import { Action } from './action';

export class Permission {
    program: string;
    action: Action;

    constructor(program: string, action: Action){
        this.program = program;
        this.action = action;
    }
}