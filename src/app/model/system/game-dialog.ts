import { GameDialogEntry } from "./game-dialog-entry";
import { Game } from "./game";
import { GenericUtils } from "src/app/utils/generic.utils";

export class GameDialog{
    private _entries:GameDialogEntry[];//turn it on nodes, ad probably will be better
    private _entryIndex:number=0;
    private _entry:GameDialogEntry=null;

    constructor(entries:GameDialogEntry[]){
        this._entries=entries;
    }

    actualEntry(game:Game):GameDialogEntry{
        while(GenericUtils.isNull(this._entry)||!this._entry.isElegible(game)){
            this._entry=this._entries[this._entryIndex];
            if(!this._entry.isElegible(game))this._entryIndex++;
        }
        return this._entry;   
    }
    nextEntry(game:Game){
        if(this.hasNextEntry(game)){
            do{
                this._entryIndex++;
                this._entry=this._entries[this._entryIndex];
            }while(!this._entry.isElegible(game)) 
        }
    }
    previousEntry(game:Game){
        if(this.canGoBack(game)){
            do{
                this._entryIndex--;
                this._entry=this._entries[this._entryIndex];
            }while(!this._entry.isElegible(game)) 
        }
    }
    hasNextEntry(game:Game):boolean{
        let index = this._entryIndex+1;
        while(this._entries.length>index){
            if(this._entries[index].isElegible(game))return true;
            index++;
        }
        return false;        
    }
    canGoBack(game:Game):boolean{
        let index = this._entryIndex-1;
        while(0<=index){
            if(this._entries[index].isUnrepeatable())return false;
            if(this._entries[index].isElegible(game))return true;
            index--;
        }
        return false;       
    }   
    

    
}