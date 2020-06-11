class Scene2 extends Phaser.Scene{
    constructor() {
        super('Scene2')

      }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
init(){
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
preload(){
    this.load.image('return','_assets/returnCity.png');
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
create(){
  this.add.image(960, 540, 'background');
  
  this.returnButton = this.add.image(200, 750, 'return').setScale(0.2).setInteractive();
  this.returnButton.alpha = 0.8;

  this.returnButton.on('pointerover', function(){
          this.alpha = 1;

      });
  this.returnButton.on('pointerout', function(){
          this.alpha = 0.8;
      });
  this.returnButton.on('pointerdown', function(){
        game.scene.scenes[1].scene.start("Scene1" );
  });


  this.quartiers = this.add.group({ key : 'ville'});
  this.quartiers.add( this.add.image(960, 540, keyQuartier ).setDepth(2).setScale(2) );


  this.rooms = this.add.group( {key: 'quartier'});
  for (var j = 0; j< keyRoomList[iQuart].length; j++){
        if (keyRoomList[iQuart][j] != null){
              this.rooms.add( this.add.image( 860 + j*100, 640, 'square').setDepth(2).setInteractive() );
        }
  }


  this.rooms.children.iterate(function (child) {
      child.on('pointerover', function(){
              game.scene.scenes[1].quartiers.children.iterate(function(child2){ child2.alpha = 0.5 });
              game.scene.scenes[1].rooms.children.iterate(function(child3){ child3.alpha = 0.5 });
              this.alpha = 1;
          }, child);
      child.on('pointerout', function(){
              game.scene.scenes[1].quartiers.children.iterate(function(child2){ child2.alpha = 1 });
              game.scene.scenes[1].rooms.children.iterate(function(child3){ child3.alpha = 1 });
          });
      child.on('pointerdown', function(){
        jRoom = getIndex(game.scene.scenes[1].rooms, this)

        keyRoom = keyRoomList[iQuart][jRoom];

        //game.scene.scenes[1].scene.start("Scene3" );

      });

  }, this);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
  update(){

  }//END UPDATE


  }//END SCENE
