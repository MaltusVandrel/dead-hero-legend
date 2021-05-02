import Phaser  from 'phaser'
import game from '../main';
import { TextButton } from '../widget/text-button';
import { GAMEDATA } from '../config/data';

export default class MainMenuScene extends Phaser.Scene
{   
    self:Phaser.Scene=this;
    mapButton:TextButton;
    constructor(){
        super({ key: "MainMenuScene" });
	}

	preload()
    { }

    create()
    {
        this.mapButton = new TextButton(this, 100, 100, 'Click me!', null, 
        this.goToMap);
       
        this.add.existing(this.mapButton);
    }
    goToMap(){    
           
        game.scene.remove(GAMEDATA.SCENES.MAIN_MENU);
        game.scene.start(GAMEDATA.SCENES.MAP);
    }
}
