import { Game } from "../model/system/game";
import { Injectable } from "@angular/core";
import { gamesMap } from "../data/games";

@Injectable()
export class GameService {

   _game: Game;

   setGame(value: String) {
      window.localStorage.setItem('game.referenceCode',value.toString());
      this._game = gamesMap.get(value.toString());
   }

   getGame(): Game {
      if(this._game==undefined||this._game==null){
         let referenceCode = window.localStorage.getItem('game.referenceCode');
         this._game=gamesMap.get(referenceCode);
      }
      return this._game;
   }

   constructor() {}

}