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
        this.cursors = this.input.keyboard.createCursorKeys();
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
