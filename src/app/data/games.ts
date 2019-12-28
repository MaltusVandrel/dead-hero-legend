import { Game } from "../model/system/game";
import { Scene } from "../model/system/scene";
import { SceneUtils } from "../utils/scene.utils";
import { Being } from "../model/actors/being";

let tecDemo1 = new Game(SceneUtils.findSceneByReference('DEMOS_SIMPLE_TEXT'),new Being("No One"));

let games:Map<string,Game>=new Map();
games.set("TEC_DEMO_1",tecDemo1);
export let gamesMap:Map<string,Game>=games;