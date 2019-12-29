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
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key=='Enter'){
      this.place.nextText();
    }
  }
  
  }