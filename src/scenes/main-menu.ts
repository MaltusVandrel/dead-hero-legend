import Phaser from 'phaser'
import game from '../main';
import { TextButton } from '../widget/text-button';
import MapScene from './map';


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
        game.scene.remove(MainMenuScene.name);
        game.scene.start(MapScene.name);
    }
}
