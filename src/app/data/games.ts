import { Game } from "../model/system/game";
import { Place } from "../model/system/place";
import { PlaceUtils } from "../utils/place.utils";
import { Being } from "../model/actors/being";

let tecDemo1 = new Game(PlaceUtils.findPlaceByReference('DEMOS_SIMPLE_TEXT'),new Being("No One"));

let games:Map<string,Game>=new Map();
games.set("TEC_DEMO_1",tecDemo1);
export let gamesMap:Map<string,Game>=games;