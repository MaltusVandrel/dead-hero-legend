import { Game } from "../model/system/game";
import { Injectable } from "@angular/core";

@Injectable()
export class GameService {

   _game: Game;

   set scene(value: Game) {
      window.localStorage.setItem('sceneReferenceCode',value.referenceCode.toString());
      this._game = value;
   }

   get scene(): Scene {
      if(this._game==undefined||this._game==null){
         let referenceCode = window.localStorage.getItem('sceneReferenceCode');
         this._game=scenesMap.get(referenceCode);
      }
      return this._game;
   }

   constructor() {}

}