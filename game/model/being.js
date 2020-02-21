class Being extends baseModel{
    
    name;
    attributes=[];    
    resources=[];
    constructor(obj) {
        if(obj){
            if(obj.name)this.attributes=obj.name;
            if(obj.attributes)this.attributes=obj.attributes;
            if(obj.resources)this.resources=obj.resources;
        }
    }

    tackle(){
        let randomPartDamage= Math.random() * ( .5 - (this.luk()/100) ) ;
        let fixedPartDamage= 0.5 + (this.luk()/100);
        let baseDamage = 35;
        let firstHalfDamage= baseDamage*randomPartDamage;
        let lastHalfDamage= baseDamage*fixedPartDamage;
        let fullNormalDamage = firstHalfDamage+lastHalfDamage+this.str();
        let multiplier = ( (Math.random()*100) + this.luk() )/100;
        let fullDamage = Math.floor(fullNormalDamage * multiplier);
        return fullDamage;
    }

    getResource(code){
        for(let resource of this.resources){
            if(resource.code==code)return resource;
        }
    }
    health(){
        return this.getAtribute(Code.Resource.HEALTH);        
    }
    mana(){
        return this.getAtribute(Code.Resource.MANA);        
    }
    spirit(){
        return this.getAtribute(Code.Resource.SPIRIT);        
    }
    stamina(){
        return this.getAtribute(Code.Resource.STAMINA);        
    }

    getAtribute(code){
        for(let attribute of this.attributes){
            if(attribute.code==code)return attribute;
        }
    }
    str(){
        return this.getAtribute(Code.Attribute.STR).value;        
    }
    dex(){
        return this.getAtribute(Code.Attribute.DEX).value;        
    }
    con(){
        return this.getAtribute(Code.Attribute.CON).value;        
    }
    int(){
        return this.getAtribute(Code.Attribute.INT).value;        
    }
    wis(){
        return this.getAtribute(Code.Attribute.WIS).value;        
    }
    cha(){
        return this.getAtribute(Code.Attribute.CHA).value;        
    }
    wil(){
        return this.getAtribute(Code.Attribute.WIL).value;        
    }
    luk(){
        return this.getAtribute(Code.Attribute.LUK).value;        
    }


  }