import { OnInit, Component } from "@angular/core";
import { Place } from "src/app/model/system/place";
import {demoMap} from "src/app/data/demos";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "src/app/model/system/game";
import { GameService } from "src/app/service/game.service";
@Component({
    selector: 'demos',
    templateUrl: './demos.component.html',
    styleUrls: ['./demos.component.css']
  })
  export class DemosComponent implements OnInit {

    demos:Map<String,String> = demoMap;
    constructor(private gameService:GameService,
      private router: Router) { }
  
    goGame(value:String){
      this.gameService.setGame(value);
      this.router.navigate(['/place']);
    }
    ngOnInit() {
    }
  
  }