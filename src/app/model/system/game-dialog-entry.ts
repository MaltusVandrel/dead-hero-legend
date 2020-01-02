import { Criterea } from "./criterea";
import { Game } from "./game";
import { GenericUtils } from "src/app/utils/generic.utils";

export class GameDialogEntry{
    private _text:String;
    private _criterea:Criterea;
    private _alternativeText:String;
    private _unrepeatable:boolean=false;
    private _read:boolean=false;
    
    constructor(text:String,criterea?:Criterea,alternativeText?:String,unrepeatable?:boolean){
        this._text=text;
        this._criterea=criterea;
        this._alternativeText=alternativeText;
        this._unrepeatable=unrepeatable;        
    }
    isUnrepeatable():boolean{
        return this._unrepeatable;
    }
    isElegible(game:Game):boolean{
        if(this._read&&this._unrepeatable)return false;
        if(GenericUtils.isNull(this._criterea))return true;
        if(GenericUtils.isEmpty(this._alternativeText))return true;
        return this._criterea.evaluate(game);
    }
    getEntry(game:Game):String{
        this._read=true;
        if(this._criterea.evaluate(game)){
            return this._text;
        }else{
            return this._alternativeText;
        }
    }

}