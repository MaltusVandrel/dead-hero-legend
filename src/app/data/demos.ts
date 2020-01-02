import { Place } from "../model/system/place";
import { Game } from "../model/system/game";
import { gamesMap } from "./games";
import { Demo } from "../model/development/demo";

let demos:Demo[] = [];
demos.push(new Demo("A Simple Text","/place","TEC_DEMO_1"));
export let demoList=demos;