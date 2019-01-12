export class Action {
    open: boolean;
    read: boolean;
    write: boolean;
    delete: boolean;

    constructor(open: boolean, read: boolean, write: boolean, _delete: boolean){
        this.open = open;
        this.read = read;
        this.write = write;
        this.delete = _delete;
    }
}