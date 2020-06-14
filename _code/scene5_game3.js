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
        this.order = new GameObject(this, 0, 275, 'order03');
        this.pasta = new GameObject(this, 720, 1267, 'pasta');
        this.eggLeft = new GameObject(this, 457, 1680, 'egg').setFrame(4).setScale(0.7);
        this.eggRight = new GameObject(this, 1076, 1680, 'egg').setFrame(6).setScale(0.7);
        this.leftStatut = 0
        this.rightStatut = 0

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
        if(this.order.body.center.x < 645 ) {
            this.order.body.velocity.x = 50000;
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
