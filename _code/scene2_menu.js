class Scene2_menu extends Phaser.Scene{
    constructor() {
        super('scene2_menu')
      }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
    init(){
    }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
    preload(){

    }


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
    create(){
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(750, 1280, 'background2');
        this.add.image(750, 1830, 'button_competition');
        this.add.image(720, 1830, 'locker');
        this.add.image(750, 2180, 'button_personnalize');
        this.add.image(720, 2180, 'locker');

        this.playButton = new GameObject(this, 750, 1480, 'button_adventure' );

        this.playButton.on('pointerdown', function(){
            this.setTexture('button_adventureP');
        });
        this.playButton.on('pointerup', function(){
            game.scene.scenes[1].scene.start("scene3_game1" );
        });
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
