class Scene1_start extends Phaser.Scene{
    constructor() {
        super('scene1_start')
      }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
    init(){
    }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
    preload(){
      this.load.audio('chine','sounds/music/china.mp3');
      this.load.audio('hub','sounds/music/hub.mp3');
      this.load.audio('italy','sounds/music/italy.mp3');
      this.load.audio('main','sounds/music/main.mp3');
      this.load.audio('win','sounds/music/win.mp3');
      this.load.audio('loose','sounds/music/loose.mp3');
      this.load.audio('stove','sounds/tictic.mp3');
      this.load.audio('timerTic','sounds/timerTic.mp3');
      this.load.audio('timerKrr','sounds/timerKrr.mp3');

      this.load.image('background1','assets/scene1/background.png');
      this.load.image('background2','assets/scene2/background.png');
      this.load.image('backgroundGame','assets/backgroundGame.png');
      this.load.image('order01','assets/scene3/order01.png');
      this.load.image('order02','assets/scene4/order02.png');
      this.load.image('order03','assets/scene5/order03.png');

      this.load.spritesheet('timerSprite','assets/timer689x723.png',{frameWidth: 685, frameHeight: 723});
      this.load.spritesheet('egg','assets/scene3/egg682x1223.png',{frameWidth: 682, frameHeight: 1223});
      this.load.spritesheet('stoveTop','assets/scene4/stoveTop1069x1223.png',{frameWidth: 1069, frameHeight: 1223});
      this.load.spritesheet('pasta','assets/scene5/pasta4813x1649.png',{frameWidth: 1203, frameHeight: 1649});
    }


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
    create(){
        this.music = this.sound.add('hub');
        //this.music.play();
        game.sound.setVolume(0.1);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.add.image(720, 1280, 'background1');

    }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
    update(){
        if (game.sound.context.state === 'suspended') {game.sound.context.resume();}
        //loop(this.music);

        if (this.cursors.right.isDown)
            {
                this.scene.start("scene2_menu" );
            }
        if (this.cursors.left.isDown)
            {
                this.scene.start("scene5_game3" );
            }
    }//END UPDATE


}//END SCENE
