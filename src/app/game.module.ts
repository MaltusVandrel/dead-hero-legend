import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { GameComponent } from './game.component';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AboutComponent } from './components/about/about.component';
import { PlaceComponent } from './components/place/place.component';
import { DemosComponent } from './components/demos/demos.component';
import { GameService } from './service/game.service';

@NgModule({
  bootstrap:    [
    GameComponent  ],
  declarations: [ 
    GameComponent,
    MainMenuComponent,
    AboutComponent,
    PlaceComponent,
    DemosComponent,
    ] ,
  providers:[GameService],
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
      { path: '', component: MainMenuComponent },
      { path: 'home', component: MainMenuComponent },
      { path: 'about', component: AboutComponent },
      { path: 'place', component: PlaceComponent },
      { path: 'demos', component: DemosComponent },
    ]) 
  ]
})
export class GameModule { }
