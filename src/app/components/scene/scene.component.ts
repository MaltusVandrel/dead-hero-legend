import { OnInit, Component, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Scene } from "src/app/model/system/scene";
import { SceneService } from "src/app/data/service/scene.service";

@Component({
    selector: 'scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.css']
  })
  export class SceneComponent implements OnInit {
    scene:Scene;
    constructor(
      private route: ActivatedRoute,
      private sceneService:SceneService
    ) { }
  
    ngOnInit() {
      this.scene=this.sceneService.scene;
    }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key=='Enter'){
      this.scene.nextText();
    }
  }
  
  }