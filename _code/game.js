this.config = {
	type: Phaser.AUTO,
	width: 1440,
	height: 2560,
physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
scene:
	[Scene4_game2, Scene3_game1, Scene1_start, Scene2_menu, Scene5_game3, SceneTransition_timer]
};

this.game = new Phaser.Game(config);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INIT
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
