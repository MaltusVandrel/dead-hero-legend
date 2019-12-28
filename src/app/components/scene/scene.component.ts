import { OnInit, Component, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Scene } from "src/app/model/system/scene";
import { GameService } from "src/app/service/game.service";
import { Game } from "src/app/model/system/game";

@Component({
    selector: 'scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.css']
  })
  export class SceneComponent implements OnInit {
    scene:Scene;
    game:Game;
    constructor(
      private route: ActivatedRoute,
      private gameService:GameService
    ) { }
  
    ngOnInit() {
      this.game=this.gameService.getGame();
      this.scene = this.game.actualScene;
    }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key=='Enter'){
      this.scene.nextText();
    }
  }
  
  }