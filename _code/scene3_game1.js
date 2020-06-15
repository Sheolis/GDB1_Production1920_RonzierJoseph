class Scene3_game1 extends Phaser.Scene{
    constructor() {
        super('scene3_game1')
      }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
    init(){

    }//END INIT

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
    preload(){

    }//END PRELOAD


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
    create(){
        this.frame = 0
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(720, 1280, 'backgroundGame');
        this.order = new GameObject(this, -500, 275, 'order01');

        //timer

        this.fxTimer = this.sound.add('timerKrr').setVolume(8);
        this.timerSprite = new GameObject(this, -1000, 255, 'timerSprite').setScale(0.6);
        this.timerStatut = 0;

        this.winMov = this.add.video(720, 1280, 'win').setVisible(false);
        this.looseMov = this.add.video(720, 1280, 'loose').setVisible(false);

        this.egg = new GameObject(this, 720, 1280, 'egg').setSize(600,1000);

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
                    if(this.egg["frame"].name == 3){
                        this.egg.setVisible(false);
                        this.timerSprite.setVisible(false);
                        this.winMov.setVisible(true);
                        this.winMov.play();
                        this.time.addEvent({delay : 6000, callback : function(){this.scene.start("scene4_game2" );}, callbackScope : this, repeat : 0});
                    }
                    else{
                      this.egg.setVisible(false);
                      this.timerSprite.setVisible(false);
                      this.looseMov.setVisible(true);
                      this.looseMov.play();
                      this.time.addEvent({delay : 6000, callback : function(){this.scene.start("scene4_game2" );}, callbackScope : this, repeat : 0});
                    }
                }},
                callbackScope : this,
                repeat : 4
            });

        //EGG

        this.egg.on('pointerover', function(){
              },);
        this.egg.on('pointerout', function(){
            });
        this.egg.on('pointerdown', function(){
            this.newFrame = this.getCurrentFrame() + 1
            if(this.newFrame <= 3){
                this.setCurrentFrame(this.newFrame);
                this.setFrame(this.newFrame)
            }


        //TIMER

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
        if(this.order.body.center.x < 600 ) {
            this.order.body.velocity.x = 4000;
        }else{
            this.order.body.velocity.x = 0;
        }
        if(this.timerSprite.body.center.x > 150 ) { this.timerSprite.body.center.x  = 150; }
        if(this.order.body.center.x > 600 ){ this.order.body.center.x = 600; }


        if (this.cursors.right.isDown)
            {
                this.scene.start("scene4_game2" );
            }
        if (this.cursors.left.isDown)
            {
                this.scene.start("scene2_menu" );
            }
    }//END UPDATE

}//END SCENE
