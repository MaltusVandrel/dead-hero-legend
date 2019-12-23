import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { GameComponent } from './game.component';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AboutComponent } from './components/about/about.component';
import { SceneComponent } from './components/scene/scene.component';
import { DemosComponent } from './components/demos/demos.component';
import { SceneService } from './data/service/scene.service';

@NgModule({
  bootstrap:    [
    GameComponent  ],
  declarations: [ 
    GameComponent,
    MainMenuComponent,
    AboutComponent,
    SceneComponent,
    DemosComponent,
    ] ,
  providers:[SceneService],
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
      { path: '', component: MainMenuComponent },
      { path: 'home', component: MainMenuComponent },
      { path: 'about', component: AboutComponent },
      { path: 'scene', component: SceneComponent },
      { path: 'demos', component: DemosComponent },
    ]) 
  ]
})
export class GameModule { }
