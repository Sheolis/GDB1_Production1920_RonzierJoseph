class Scene4_game2 extends Phaser.Scene{
    constructor() {
        super('scene4_game2')
      }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
    init(){

    }//END INIT

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
    preload(){

    }//END PRELOAD


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
    create(){
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(720, 1280, 'backgroundGame');

        //this.gazTimer = game.scene.scenes[3].time.addEvent({delay : 500, loop: false});

        this.stove = new GameObject(this, 720, 1280, 'stoveTop').setSize(250,250).setOffset(412,684);
        this.fxButton = this.sound.add('stove').setVolume(10);
        this.gazStatut = 0;
        this.anims.create({
            key:'gazOn',
            frames: this.anims.generateFrameNumbers('stoveTop', {start: 1, end: 2}),
            frameRate: 8,
            repeat: -1
        });

        this.stove.on('pointerdown', function(){
            if(game.scene.scenes[3].gazStatut == 0 ){
                this.setFrame(3);
                game.scene.scenes[3].fxButton.play();
                game.scene.scenes[3].gazTimer = game.scene.scenes[3].time.addEvent({delay : 1000, callback : function(){ this.gazStatut = 1; this.stove.anims.play('gazOn'); this.fxButton.stop() }, callbackScope: game.scene.scenes[3], loop: false});
            }
        });
        this.stove.on('pointerup', function(){
            game.scene.scenes[3].fxButton.stop();
            if(game.scene.scenes[3].gazStatut == 0){
              this.setFrame(0);
              game.scene.scenes[3].gazTimer.remove();
            }
        });
    }//END CREATE

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
    update(){
        if (this.cursors.left.isDown)
            {
                this.scene.start("scene3_game1" );
            }
        if (this.cursors.right.isDown)
            {
                this.scene.start("scene5_game3" );
            }
    }//END UPDATE

}//END SCENE
