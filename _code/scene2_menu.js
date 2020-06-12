class Scene2_menu extends Phaser.Scene{
    constructor() {
        super('scene2_menu')
      }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
    init(){
    }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
    preload(){
        this.load.image('background2','assets/scene2/background.png');
    }


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
    create(){
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(720, 1280, 'background2');
    }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
    update(){
        if (this.cursors.right.isDown)
            {
                this.scene.start("scene3_game1" );
            }
        if (this.cursors.left.isDown)
            {
                this.scene.start("scene1_start" );
            }
    }//END UPDATE


}//END SCENE
