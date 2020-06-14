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
        this.order = new GameObject(this, 0, 275, 'order02');
        this.stove = new GameObject(this, 720, 1280, 'stoveTop').setSize(250,250).setOffset(412,684);
        this.fxButton = this.sound.add('stove').setVolume(10);
        this.gazStatut = 0;
        this.anims.create({
            key:'gazOn',
            frames: this.anims.generateFrameNumbers('stoveTop', {start: 1, end: 2}),
            frameRate: 8,
            repeat: -1
        });

        //timer
        this.fxTimer = this.sound.add('timerKrr').setVolume(8);
        this.timerSprite = new GameObject(this, -1000, 255, 'timerSprite').setScale(0.6);
        this.timerStatut = 0;
        this.anims.create({
            key:'timerRoll',
            frames: this.anims.generateFrameNumbers('timerSprite', {start: 6, end: 7}),
            frameRate: 10,
            repeat: 0
        });
        this.time.addEvent({delay : 1000, callback : function(){this.timerStatut += 1; this.fxTimer.play(); this.timerSprite.anims.play('timerRoll'); this.timerSprite.on('animationcomplete', function(){this.timerSprite.setFrame(this.timerStatut);}, this);}, callbackScope : this, repeat : 4});


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
        //timer
        if(this.timerSprite.body.center.x < 150 ) {
            this.timerSprite.body.velocity.x = 4000;
        }else{
            this.timerSprite.body.velocity.x = 0;
        }
        //banner
        if(this.order.body.center.x < 645 ) {
            this.order.body.velocity.x = 4000;
        }else{
            this.order.body.velocity.x = 0;
        }

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
