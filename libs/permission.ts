export enum action {
    open,
    read,
    write,
    delete
}

export class Permission {
    program: string;
    actions: action[];
}