import { placesList } from "../data/places";
import { Place } from "../model/system/place";

export class PlaceUtils{

    private constructor(){}

    static findPlaceByReference(reference:String):Place{
        for(let place of placesList){
            if(place.referenceCode==reference)return place;
        }
        return null;
    }
}