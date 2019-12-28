import { scenesList } from "../data/scenes";
import { Scene } from "../model/system/scene";

export class SceneUtils{

    private constructor(){}

    static findSceneByReference(reference:String):Scene{
        for(let scene of scenesList){
            if(scene.referenceCode==reference)return scene;
        }
        return null;
    }
}