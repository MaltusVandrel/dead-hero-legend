export class Event{
    private _name:String;
    private _texts:String[];
    private _textIndex:number=0;
    private _referenceCode:String;
    constructor(texts:String[],referenceCode?:String){
        //for(let text in texts){}
        this._texts=texts;
        this._referenceCode=referenceCode;
    } 
    get texts():String[]{return this._texts;};
    get referenceCode():String{return this._referenceCode;};
    actualText():String{
        return this._texts[this._textIndex];   
    }
    nextText(){
        if(this.hasNext())this._textIndex++;
    }
    previousText(){
        if(!this.isStart())this._textIndex--;
    }    
    hasNext():boolean{
        return (this._texts.length>(this._textIndex+1));
    }
    isStart():boolean{
       return this._textIndex==0; 
    }

    
}