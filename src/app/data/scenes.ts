import { Scene } from "../model/system/scene";

let scenes:Scene[]=[];
scenes.push(new Scene(["This is the first text.","Be happy that it works for now!"],'DEMOS_SIMPLE_TEXT'));

export let scenesList:Scene[]=scenes;