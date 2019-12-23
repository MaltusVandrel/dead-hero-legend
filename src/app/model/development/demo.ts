export class Demo{
    private _route:String;
    private _param:any;

    constructor (route:String,param:any){
        this._route=route;
        this._param=param;
    }
    get route():String{return this._route;};
    get param():any{return this._param;};
}