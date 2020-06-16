this.config = {
	type: Phaser.AUTO,
	width: 1440,
	height: 2560,
physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
scene:
	[  Scene1_start, Scene2_menu, Scene3_game1, Scene4_game2, Scene5_game3]
};

this.game = new Phaser.Game(config);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INIT
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
