import { Scene } from "src/app/model/system/scene";
import { Injectable } from "@angular/core";

@Injectable()
export class SceneService {

   _scene: Scene;

   set scene(value: Scene) {
      this._scene = value;
   }

   get scene(): Scene {
       return this._scene;
   }

   constructor() {}

}