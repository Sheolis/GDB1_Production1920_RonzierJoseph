class Scene5_game3 extends Phaser.Scene{
    constructor() {
        super('scene5_game3')
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
        this.pointer = this.input.activePointer
        this.add.image(720, 1280, 'backgroundGame');

        this.winMov = this.add.video(720, 1280, 'win').setVisible(false);
        this.looseMov = this.add.video(720, 1280, 'loose').setVisible(false);

        this.order = new GameObject(this, 0, 275, 'order03');
        this.pasta = new GameObject(this, 720, 1267, 'pasta');
        this.eggLeft = new GameObject(this, 457, 1680, 'egg').setFrame(4).setScale(0.7);
        this.eggRight = new GameObject(this, 1076, 1680, 'egg').setFrame(6).setScale(0.7);
        this.leftStatut = 0
        this.rightStatut = 0

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
        this.time.addEvent({
            delay : 1000,
            callback : function(){
                this.timerStatut += 1;
                this.fxTimer.play();
                this.timerSprite.anims.play('timerRoll');
                this.timerSprite.on('animationcomplete', function(){
                    this.timerSprite.setFrame(this.timerStatut);
                }, this);
                if(this.timerStatut == 5){
                    if(this.pasta["frame"].name == 3){
                        this.pasta.setVisible(false);
                        this.timerSprite.setVisible(false);
                        this.winMov.setVisible(true);
                        this.winMov.play();
                        this.time.addEvent({delay : 6000, callback : function(){this.scene.start("scene1_start" );}, callbackScope : this, repeat : 0});
                    }
                    else{
                        this.pasta.setVisible(false);
                        this.timerSprite.setVisible(false);
                        this.looseMov.setVisible(true);
                        this.looseMov.play();
                        this.time.addEvent({delay : 6000, callback : function(){this.scene.start("scene1_start" );}, callbackScope : this, repeat : 0});
                    }
                }
            },
            callbackScope : this,
             repeat : 4
        });


        this.eggLeft.on('pointerdown', function(){
            game.scene.scenes[4].leftStatut = 1;
        });
        this.eggLeft.on('pointerup', function(){
            game.scene.scenes[4].leftStatut = 0;
            if(this.body.center.y > 450 && this.body.center.y < 1300 && this.body.center.x > 295 && this.body.center.x < 1220 ){
                this.setVisible(false);
                game.scene.scenes[4].leftStatut = 2;
                if(game.scene.scenes[4].rightStatut != 2) {
                    game.scene.scenes[4].pasta.setFrame(2);
                }
                else{
                    game.scene.scenes[4].pasta.setFrame(3);
                }
            }
            else{
                this.setPosition(457, 1680);
            }
        });

        this.eggRight.on('pointerdown', function(){
            game.scene.scenes[4].rightStatut = 1;
        });
        this.eggRight.on('pointerup', function(){
            game.scene.scenes[4].rightStatut = 0;
            if(this.body.center.y > 450 && this.body.center.y < 1300 && this.body.center.x > 295 && this.body.center.x < 1220 ){
                this.setVisible(false);
                game.scene.scenes[4].rightStatut = 2;
                if(game.scene.scenes[4].leftStatut != 2) {
                    game.scene.scenes[4].pasta.setFrame(1);
                }
                else{
                    game.scene.scenes[4].pasta.setFrame(3);
                }
            }
            else{
                this.setPosition(1076, 1680);
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
        if(this.leftStatut == 1){
            this.eggLeft.setPosition(this.pointer.x, this.pointer.y);
        }
        if(this.rightStatut == 1){
            this.eggRight.setPosition(this.pointer.x, this.pointer.y);
        }
        if (this.cursors.left.isDown)
            {
                this.scene.start("scene4_game2" );
            }
        if (this.cursors.right.isDown)
            {
                this.scene.start("scene1_start" );
            }
    }//END UPDATE

}//END SCENE
