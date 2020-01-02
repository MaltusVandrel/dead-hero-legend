import { Game } from "../system/game";

export class Demo{
    private _name:String;
    private _route:String;
    private _gameReference:String;

    constructor (
        name:String,
        route:String,
        game:String){
            this._name=name;
        this._route=route;
        this._gameReference=game;
    }
    get name(){return this._name};
    get route():String{return this._route;};
    get gameReference():any{return this._gameReference;};
}