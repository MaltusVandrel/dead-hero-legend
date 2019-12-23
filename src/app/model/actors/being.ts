import { AttributeFunction } from "./attribute-function.enum";
import { Attribute } from "./attribute";

export class Being {

    private _name:String;

    private _strength:Attribute=new Attribute(AttributeFunction.Strength);
    private _constitution:Attribute=new Attribute(AttributeFunction.Constitution);
    private _dexterity:Attribute=new Attribute(AttributeFunction.Dexterity);
    private _inteligence:Attribute=new Attribute(AttributeFunction.Intelligence);
    private _wisdom:Attribute=new Attribute(AttributeFunction.Wisdom);
    private _charisma:Attribute=new Attribute(AttributeFunction.Charisma);
    private _luck:Attribute=new Attribute(AttributeFunction.Luck);
    private _appearance:Attribute=new Attribute(AttributeFunction.Appearance);
  
    get name():String{ return this._name}
    
    get strength():Attribute{return this._strength};
    get constitution():Attribute{return this._constitution};
    get dexterity():Attribute{return this._dexterity};
    get inteligence():Attribute{return this._inteligence};
    get wisdom():Attribute{return this._wisdom};
    get charisma():Attribute{return this._charisma};
    get luck():Attribute{return this._luck};
    get appearance():Attribute{return this._appearance};
    
    attributes():Attribute[]{
        return [this.strength,this.constitution,this.dexterity,this.inteligence,this.wisdom,this.charisma,this.luck,this.appearance];
    }
    getAttribute(name:AttributeFunction):Attribute{
        for(let attribute of this.attributes()){
            if(attribute.name===name){
                return attribute;
            }
        }
    }

}