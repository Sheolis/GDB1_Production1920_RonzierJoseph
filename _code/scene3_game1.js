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
        //EGG
        this.egg = new GameObject(this, 720, 1280, 'egg').setSize(600,1000);

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

        });
    }//END CREATE

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
    update(){
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
