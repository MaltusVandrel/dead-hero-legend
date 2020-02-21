class Resource extends baseModel{
    value=0;
    maxValue=0
    code;
    constructor(value,code){
        this.value=value;
        this.maxValue=value;
        this.code=code;
    }
}

function _doResFunc(code){
    return (inVal)=>{
        return new Attribute(inVal,code);
    }
}
Resource.HEALTH=_doResFunc(Code.Resource.HEALTH);
Resource.MANA=_doResFunc(Code.Resource.MANA);
Resource.SPIRIT=_doResFunc(Code.Resource.SPIRIT);
Resource.STAMINA=_doResFunc(Code.Resource.STAMINA);
Resource.getAll=(health,mana,spirit,stamina)=>{
    var resources=[];
        resources.push(Resource.HEALTH(health));
        resources.push(Resource.MANA(mana));
        resources.push(Resource.SPIRIT(spirit));
        resources.push(Resource.STAMINA(stamina));
    return resources;
}