import Phaser from 'phaser'
import { GameDef } from '../config/game-defs';

export class TextButton extends Phaser.GameObjects.Text {
    constructor(
            scene:Phaser.Scene, 
            x:number, 
            y:number, 
            text:string|string[], 
            style:any={fill:GameDef.style.text.color.DEFAULT_COLOR},
            callback:Function) {
        super(scene, x, y, text, style);    
        this.setInteractive({ useHandCursor: true })
        .on('pointerover', () => this.enterButtonHoverState() )
        .on('pointerout', () => this.enterButtonRestState() )
        .on('pointerdown', () => this.enterButtonActiveState() )
        .on('pointerup', () => {
          this.enterButtonHoverState();
          callback();
        });
    }
  
    enterButtonHoverState() {
      this.setStyle({ fill: GameDef.style.text.color.PRIMARY_COLOR});
    }
  
    enterButtonRestState() {
      this.setStyle({ fill: GameDef.style.text.color.DEFAULT_COLOR});
    }
  
    enterButtonActiveState() {
      this.setStyle({ fill: GameDef.style.text.color.PRIMARY_COLOR_LIGHT });
    }
}