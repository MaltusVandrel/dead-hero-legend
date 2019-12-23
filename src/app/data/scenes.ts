import { Scene } from "../model/system/scene";

let scenes:Map<String,Scene>= new Map();
scenes.set('DEMOS_SIMPLE_TEXT',new Scene("This is the first text.","Be happy that it works for now!"));

export let scenesMap:Map<String,Scene>=scenes;