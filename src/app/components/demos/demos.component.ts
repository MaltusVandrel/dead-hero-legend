import { OnInit, Component } from "@angular/core";
import { Scene } from "src/app/model/system/scene";
import {demoMap} from "src/app/data/demos";
import { SceneService } from "src/app/service/scene.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
    selector: 'demos',
    templateUrl: './demos.component.html',
    styleUrls: ['./demos.component.css']
  })
  export class DemosComponent implements OnInit {

    demos:Map<String,Scene> = demoMap;
    constructor(private sceneService:SceneService,
      private router: Router) { }
  
    goScene(value:Scene){
      this.sceneService.scene=value;
      this.router.navigate(['/scene']);
    }
    ngOnInit() {
    }
  
  }