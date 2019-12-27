import { Scene } from "src/app/model/system/scene";
import { Injectable } from "@angular/core";
import { scenesMap } from "../data/scenes";

@Injectable()
export class SceneService {

   _scene: Scene;

   set scene(value: Scene) {
      window.localStorage.setItem('sceneReferenceCode',value.referenceCode.toString());
      this._scene = value;
   }

   get scene(): Scene {
      if(this._scene==undefined||this._scene==null){
         let referenceCode = window.localStorage.getItem('sceneReferenceCode');
         this._scene=scenesMap.get(referenceCode);
      }
      return this._scene;
   }

   constructor() {}

}