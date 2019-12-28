import { Scene } from "./scene";
import { Being } from "../actors/being";

export class Game{
    private _actualScene:Scene;
    private _scenes:Scene[];
    private _mainCharacter:Being;
    
    constructor(firstScene:Scene,mainCharacter:Being,scenes?:Scene[]){
        this._actualScene=firstScene;
        this._mainCharacter=mainCharacter;
        if(scenes!=undefined&&scenes!=null&&scenes.length>0){
            this._scenes=scenes;
        }else{
            this._scenes=[];
            this._scenes.push(this._actualScene);
        }
    }

    get actualScene():Scene{
        return this._actualScene;
    }
    set actualScene(scene:Scene){
        this._actualScene=scene;
    }
    get mainCharacter():Being{
        return this._mainCharacter;
    }
    set mainCharacter(mainCharacter:Being){
        this._mainCharacter=mainCharacter;
    }
}