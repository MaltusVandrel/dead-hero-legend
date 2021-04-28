import Phaser from 'phaser'

import MainMenuScene from './scenes/main-menu'
import MapScene from './scenes/map'


const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [
		MainMenuScene,
		MapScene
	]
}
var game = new Phaser.Game(config);
export default game;
