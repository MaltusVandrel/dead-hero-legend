export class Scene{
    private _texts:String[];
    private _textIndex:number=0;
    constructor(...texts:String[]){
        //for(let text in texts){}
        this._texts=texts;
    } 
    get texts():String[]{return this._texts;};
    actualText():String{
        return this._texts[this._textIndex];   
    }
    nextText(){
        return this._textIndex++;
    }
}