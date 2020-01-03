import { Place } from "../model/system/place";
import { Game } from "../model/system/game";
import { gamesMap } from "./games";
import { Demo } from "../model/development/demo";

let demos:Demo[] = [];
demos.push(new Demo("The Void","/place","DEMOS_VOID"));
export let demoList=demos;