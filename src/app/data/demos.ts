import { Scene } from "../model/system/scene";
import { scenesMap } from "./scenes";

let demos:Map<String,Scene> = new Map<String,Scene>();
demos.set("A Simple Text",scenesMap.get("DEMOS_SIMPLE_TEXT"));
export let demoMap=demos;