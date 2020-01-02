import { GameDialog } from "./game-dialog";
import { Game } from "./game";
import { GenericUtils } from "src/app/utils/generic.utils";

export class Place{
    private _name:String;
    private _description:GameDialog;
    private _fistTime:boolean=true;
    private _referenceCode:String;
    constructor(name:String,description?:GameDialog,introduction?:GameDialog,referenceCode?:String,game?:Game){
        this._name=name;
        this._description=description;
        this._referenceCode=referenceCode;
    } 
    
    get name():String{return this._name};
    get description():GameDialog{return this._description};
    get fistTime():boolean{return this._fistTime};
    get referenceCode():String{return this._referenceCode};
    
    set fistTime(value:boolean){this._fistTime=value};

    //this way is easyer to change for some responsive stat changes between dialogs
    //its my foresight that tells me that at some point
    //dialog will have choices and may reward with
    //wisdom os something like that
    actualText():String{
        return this.description.actualText()
    }
    nextText(){
        if(this._fistTime&&GenericUtils.isNotNull(this._introduction)){
            if(this.introduction.hasNext()){
                return this.introduction.nextText();
            }else{
                this._fistTime=false;
                return this.description.actualText();
            }
       }else{            
            if(this.description.hasNext())return this.description.nextText();
       }
    }
    previousText(){
        if(this._fistTime&&GenericUtils.isNotNull(this._introduction)){
            if(!this.introduction.isStart()){
                return this.introduction.previousText();
            }
       }else{
            if(!this.description.isStart()){
                return this.description.previousText();
            }else{
                GenericUtils.isNotNull(this._introduction){
                    
                }
            }           
       }
    }    
    hasNext():boolean{
        if(this._fistTime){
            if(!this.introduction.isStart()){
                return this.introduction.previousText();
            }
       }
        return (this._texts.length>(this._textIndex+1));
    }
    isStart():boolean{
       return this._textIndex==0; 
    }
    
}