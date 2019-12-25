import { AttributeFunction } from "./attribute-function.enum";
import { Attribute } from "./attribute";
import { Scene } from "../system/scene";

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
    
    constructor(name:String){
        this._name=name;
    }
    

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

    toJson():String{
        let map:Map<String,any> = new Map<String,any>();
        map.set('name',this.name);
        map.set('strength',this.strength.toJson());
        map.set('constitution',this.constitution.toJson());
        map.set('dexterity',this.dexterity.toJson());
        map.set('inteligence',this.inteligence.toJson());
        map.set('wisdom',this.wisdom.toJson());
        map.set('charisma',this.charisma.toJson());
        map.set('luck',this.luck.toJson());
        map.set('appearance',this.appearance.toJson());
        return JSON.stringify(map);
    }
    static fromJson(json:string):Being{
        let map:Map<String,any> = JSON.parse(json);
        let being:Being=new Being(map.get('name'));
        being._strength=Attribute.fromJson(map.get('strength'));
        being._constitution=Attribute.fromJson(map.get('constitution'));
        being._dexterity=Attribute.fromJson(map.get('dexterity'));
        being._inteligence=Attribute.fromJson(map.get('inteligence'));
        being._wisdom=Attribute.fromJson(map.get('wisdom'));
        being._charisma=Attribute.fromJson(map.get('charisma'));
        being._luck=Attribute.fromJson(map.get('luck'));
        being._appearance=Attribute.fromJson(map.get('appearance'));
        return being;
    }
}