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
	[S1_Start, S2_Menu, S3_Jeu1, S4_Jeu2, S5_Jeu3]
};

this.game = new Phaser.Game(config);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  INIT
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD