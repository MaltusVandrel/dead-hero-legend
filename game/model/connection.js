class Connection extends BaseModel{
    p1;
    p2;
    revealed=true;
    constructor(obj) {
        super();
        this.p1=obj.p1;
        this.p2=obj.p2;        
    }
}