import { Place } from "../model/system/place";
import { GameDialog } from "../model/system/game-dialog";
import { GameDialogEntry } from "../model/system/game-dialog-entry";
import { Criterea } from "../model/system/criterea";
import { Game } from "../model/system/game";


let places:Place[]=[];
let description = new GameDialog([
    new GameDialogEntry("You draw yourself on to the consciousness.",null,null,true),
    new GameDialogEntry("The nothingness roar as you feel afloat in the darkest sea of numbness."),
    new GameDialogEntry("You menage to take a hold of your sanity."),
]);
places.push(new Place("The Void",description,'DEMOS_VOID'));

export let placesList:Place[]=places;