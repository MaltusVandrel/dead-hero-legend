import { GameDialogEntry } from "./game-dialog-entry";
import { Game } from "./game";
import { GenericUtils } from "src/app/utils/generic.utils";

export class GameDialog{
    private _entries:GameDialogEntry[];//turn it on nodes, ad probably will be better
    private _entryIndex:number;
    private _entry:GameDialogEntry=null;


    private eligibleList(game:Game):GameDialogEntry[]{
        let entries=[];
        for(let entry of this._entries){
            if(entry.isElegible(game))entries.push(entry);
        }
        return entries;
    }
    
    actualEntry(game:Game):String{
        if(GenericUtils.isNull(this._entry)){

        }
        return ;   
    }
    nextEntry(game:Game){
        if(!this._isProcessed)throw "The text is not precessed.";
        if(this.hasNext())this._textIndex++;
    }
    previousEntry(game:Game){
        if(!this._isProcessed)throw "The text is not precessed.";
        if(!this.isStart())this._textIndex--;
    }    
    isLastEntry(game:Game):boolean{
        return (this._texts.length>(this._textIndex+1));
    }
    isFirstEntry(game:Game):boolean{
       if(!this._isProcessed)throw "The text is not precessed.";
       return this._textIndex==0; 
    }

    
}