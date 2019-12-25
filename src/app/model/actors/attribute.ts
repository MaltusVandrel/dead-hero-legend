import {AttributeFunction} from './attribute-function.enum';
export class Attribute {
  private _name:AttributeFunction;
  private _value:number=0;
  private _modifier:number=0;

  constructor(name:AttributeFunction,value?:number){
    this._name=name;
    if(value!=undefined){
      this._value=value;
    }
  } 
  total():Number{
    return this._modifier + this._value;
  }

  get name():AttributeFunction{
    return this._name;
  };

  get value():number{return this._value};
  set value(newValue:number){this._value=newValue;}

  get modifier():number{return this._modifier};
  set modifier(newModifier:number){this._modifier=newModifier;}

  toJson():String{
    let map:Map<String,any> = new Map<String,any>();
    map.set('name',this._name);
    map.set('value',this._value);
    map.set('modifier',this._modifier);
    return JSON.stringify(map);
  }
  static fromJson(json:string):Attribute{
    let map:Map<String,any> = JSON.parse(json);
    let attribute:Attribute;
    switch(map.get('name')){
      case 'Strength':{
        attribute = new Attribute(AttributeFunction.Strength);
        break;
      }
      case 'Intelligence':{
        attribute = new Attribute(AttributeFunction.Intelligence);
        break;
      }
      case 'Wisdom':{
        attribute = new Attribute(AttributeFunction.Wisdom);
        break;
      }
      case 'Dexterity':{
        attribute = new Attribute(AttributeFunction.Dexterity);
        break;
      }
      case 'Constitution':{
        attribute = new Attribute(AttributeFunction.Constitution);
        break;
      }
      case 'Charisma':{
        attribute = new Attribute(AttributeFunction.Charisma);
        break;
      }
      case 'Luck':{
        attribute = new Attribute(AttributeFunction.Luck);
        break;
      }
      case 'Appearance':{
        attribute = new Attribute(AttributeFunction.Appearance);
        break;
      }
    }
    attribute._value=map.get('value');
    attribute._modifier=map.get('modifier');
    return attribute;
  }

}