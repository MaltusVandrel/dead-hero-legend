class Encounter extends BaseModel{
    description;
    interactions;
    constructor(obj) {
        super();
        this.description=obj.description;
        this.interactions=obj.interactions;    
    }
}