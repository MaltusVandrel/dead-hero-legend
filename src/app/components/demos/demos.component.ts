import { OnInit, Component } from "@angular/core";
import { Place } from "src/app/model/system/place";
import {demoList} from "src/app/data/demos";
import { ActivatedRoute, Router } from "@angular/router";
import { Game } from "src/app/model/system/game";
import { GameService } from "src/app/service/game.service";
import { Demo } from "src/app/model/development/demo";
@Component({
    selector: 'demos',
    templateUrl: './demos.component.html',
    styleUrls: ['./demos.component.css']
  })
  export class DemosComponent implements OnInit {

    demos:Demo[] = demoList;
    constructor(private gameService:GameService,
      private router: Router) { }
  
    goGame(value:Demo){
      this.gameService.setGame(value.gameReference);
      this.router.navigate([value.route]);
    }
    ngOnInit() {
    }
  
  }