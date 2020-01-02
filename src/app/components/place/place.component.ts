import { OnInit, Component, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Place } from "src/app/model/system/place";
import { GameService } from "src/app/service/game.service";
import { Game } from "src/app/model/system/game";

@Component({
    selector: 'place',
    templateUrl: './place.component.html',
    styleUrls: ['./place.component.css']
  })
  export class PlaceComponent implements OnInit {
    place:Place;
    game:Game;
    
    constructor(
      private route: ActivatedRoute,
      private gameService:GameService
    ) { }
  
    ngOnInit() {
      this.game=this.gameService.getGame();
      this.place = this.game.actualPlace;      
    }
    actualText():String{
      return this.place.actualText(this.game);
    }
    hasNext():boolean{
      return this.place.hasNext(this.game);
    }
    canGoBack():boolean{
      return this.place.canGoBack(this.game);
    }
    nextText(){
      this.place.nextText(this.game);
    }
    previousText(){
      this.place.previousText(this.game);
    }
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      if(event.key=='Enter'||event.key=='ArrowRight'){
        this.nextText();
      }else if(event.key=='Backspace'||event.key=='ArrowLeft'){
        this.previousText();
      }else{
        console.log(event.key);
      }
    }
  
  }