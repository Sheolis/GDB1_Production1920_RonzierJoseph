class Scene1_start extends Phaser.Scene{
    constructor() {
        super('scene1_start')
      }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
    init(){
    }

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
    preload(){
      this.load.video('win','movie/win.mp4');
      this.load.video('loose','movie/loose.mp4');
      this.load.audio('chine','sounds/music/china.mp3');
      this.load.audio('hub','sounds/music/hub.mp3');
      this.load.audio('italy','sounds/music/italy.mp3');
      this.load.audio('main','sounds/music/main.mp3');
      this.load.audio('win','sounds/music/win.mp3');
      this.load.audio('loose','sounds/music/loose.mp3');
      this.load.audio('stove','sounds/tictic.mp3');
      this.load.audio('timerTic','sounds/timerTic.mp3');
      this.load.audio('timerKrr','sounds/timerKrr.mp3');
      this.load.audio('tapEgg1','sounds/scene3_tapEgg01.mp3');
      this.load.audio('tapEgg2','sounds/scene3_tapEgg02.mp3');
      this.load.audio('tapEgg3','sounds/scene3_tapEgg03.mp3');
      this.load.audio('tapEgg4','sounds/scene3_tapEgg04.mp3');
      this.load.audio('addEgg1','sounds/scene6_eggAdd01.mp3');
      this.load.audio('addEgg2','sounds/scene6_eggAdd02.mp3');

      this.load.image('background1','assets/scene1/background.png');
      this.load.image('EXE','assets/scene1/EXE.png');
      this.load.image('background2','assets/scene2/background.png');
      this.load.image('button_adventure', 'assets/scene2/aventure.png');
      this.load.image('button_adventureP', 'assets/scene2/aventurePUSH.png');
      this.load.image('button_competition', 'assets/scene2/competition.png');
      this.load.image('button_personnalize', 'assets/scene2/personnaliser.png');
      this.load.image('locker', 'assets/scene2/cadenas-02.png');
      this.load.image('backgroundGame','assets/backgroundGame.png');
      this.load.image('order01','assets/scene3/order01.png');
      this.load.image('order02','assets/scene4/order02.png');
      this.load.image('order03','assets/scene5/order03.png');
      this.load.spritesheet('timerSprite','assets/timer689x723.png',{frameWidth: 685, frameHeight: 723});
      this.load.spritesheet('loadingSprite', 'assets/scene2/loading255x260.png', {frameWidth: 255, frameHeight: 260});
      this.load.spritesheet('egg','assets/scene3/egg682x1223.png',{frameWidth: 682, frameHeight: 1223});
      this.load.spritesheet('stoveTop','assets/scene4/stoveTop1069x1223.png',{frameWidth: 1069, frameHeight: 1223});
      this.load.spritesheet('pasta','assets/scene5/pasta4813x1649.png',{frameWidth: 1203, frameHeight: 1649});
    }


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
    create(){
        this.music = this.sound.add('main');
        this.music.play();
        game.sound.setVolume(1);
        this.soundStatut = 0;

        this.logo = this.add.image(720, 1280, 'background1').setInteractive();
        this.exe = this.add.image(720, 1280, 'EXE').setInteractive();

        this.exe.on('pointerdown', function(){
            game.scene.scenes[0].exe.setVisible(false).setInteractive(false);
            this.soundStatut = 1;
        });
        this.logo.on('pointerdown', function(){
            if(this.soundStatut = 1){
                game.scene.scenes[0].scene.start("scene2_menu" );
            }
        });
    }//END CREATE

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
    update(){
        if (game.sound.context.state === 'suspended') {game.sound.context.resume();}
        loop(this.music); //global.js

    }//END UPDATE


}//END SCENE
