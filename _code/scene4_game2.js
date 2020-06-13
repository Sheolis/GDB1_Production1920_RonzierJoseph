class Scene4_game2 extends Phaser.Scene{
    constructor() {
        super('scene4_game2')
      }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
    init(){

    }//END INIT

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
    preload(){
        this.load.spritesheet('stoveTop','assets/scene4/stoveTop1069x1223.png',{frameWidth: 1069, frameHeight: 1223});
    }//END PRELOAD


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
    create(){
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(720, 1280, 'backgroundGame');


        this.stove = new GameObject(this, 720, 1280, 'stoveTop').setSize(250,250).setOffset(0,-50);
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
