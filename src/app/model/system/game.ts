import { Place } from "./place";
import { Being } from "../actors/being";

export class Game{
    private _actualPlace:Place;
    private _places:Place[];
    private _mainCharacter:Being;
    
    constructor(firstPlace:Place,mainCharacter:Being,places?:Place[]){
        this._actualPlace=firstPlace;
        this._mainCharacter=mainCharacter;
        if(places!=undefined&&places!=null&&places.length>0){
            this._places=places;
        }else{
            this._places=[];
            this._places.push(this._actualPlace);
        }
    }

    get actualPlace():Place{
        return this._actualPlace;
    }
    set actualPlace(place:Place){
        this._actualPlace=place;
    }
    get mainCharacter():Being{
        return this._mainCharacter;
    }
    set mainCharacter(mainCharacter:Being){
        this._mainCharacter=mainCharacter;
    }
}