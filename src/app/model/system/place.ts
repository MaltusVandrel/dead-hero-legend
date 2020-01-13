import { GameDialog } from "./game-dialog";
import { Game } from "./game";
import { GenericUtils } from "src/app/utils/generic.utils";
import { GameDialogEntry } from "./game-dialog-entry";
import { Activity } from "./activity";

export class Place{
    private _name:String;
    private _description:GameDialog;
    private _fistTime:boolean=true;
    private _referenceCode:String;
    private _options:Activity[];
    
    constructor(name:String,description?:GameDialog,referenceCode?:String,game?:Game){
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
    actualText(game:Game):String{
        return this.description.actualEntry(game).getEntry(game);
    }
    nextText(game:Game){
        this.description.nextEntry(game);
    }
    previousText(game:Game){
        this.description.previousEntry(game);
    }    
    hasNext(game:Game):boolean{
        return this.description.hasNextEntry(game);
    }
    canGoBack(game:Game):boolean{
        return this.description.canGoBack(game);
    }
    
}