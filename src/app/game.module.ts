import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { GameComponent } from './game.component';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  bootstrap:    [
    GameComponent  ],
  declarations: [ 
    GameComponent,
    MainMenuComponent,
    AboutComponent ],
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
      { path: '', component: MainMenuComponent },
      { path: 'home', component: MainMenuComponent },
      { path: 'about', component: AboutComponent },
    ]) 
  ]
})
export class GameModule { }
