class SceneTransition_timer extends Phaser.Scene{
    constructor() {
        super('sceneTransition_timer')
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
        if (this.cursors.left.isDown)
            {
                this.scene.start("S3_Jeu1" );
            }
        if (this.cursors.right.isDown)
            {
                this.scene.start("S1_Start" );
            }
    }//END UPDATE


}//END SCENE
