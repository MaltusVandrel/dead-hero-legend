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



}