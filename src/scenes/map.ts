import Phaser from 'phaser'
import defaultIcon from 'url:~/public/assets/images/icons/default-icon.png';
import beachIcon from 'url:~/public/assets/images/icons/beach-icon.png';

export default class MapScene extends Phaser.Scene
{
    constructor(){
		super({ key: "MapScene" });
	}
    preload()
    {
        this.load.image('default-icon', defaultIcon);
        this.load.image('beach-icon', beachIcon);
    }
    create()
    {
        this.add.image(100,100,'default-icon').setScale(.25);
        this.add.image(200,200,'beach-icon').setScale(.25);
        this.cameras.main.setBackgroundColor("#D1BE9D"); 
    }
}