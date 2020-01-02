import { Game } from "../model/system/game";
import { Place } from "../model/system/place";
import { PlaceUtils } from "../utils/place.utils";
import { Being } from "../model/actors/being";

let tecDemoVoid = new Game(PlaceUtils.findPlaceByReference('DEMOS_VOID'),new Being("Lost Soul"));

let games:Map<string,Game>=new Map();
games.set("DEMOS_VOID",tecDemoVoid);
export let gamesMap:Map<string,Game>=games;