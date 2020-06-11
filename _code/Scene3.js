class Scene3 extends Phaser.Scene{
    constructor() {
        super('Scene3')

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
  console.log(this.returnButton);
  this.returnButton.on('pointerover', function(){
          this.alpha = 1;

      });
  this.returnButton.on('pointerout', function(){
          this.alpha = 0.8;
      });
  this.returnButton.on('pointerdown', function(){
        game.scene.scenes[2].scene.start("Scene1" );
  });


  this.rooms = this.add.group({ key : 'room'});
  this.rooms.add( this.add.image(960, 540, keyRoom ).setDepth(2).setScale(2) );


  this.objs = this.add.group( {key: 'quartier'});
  for (var k = 0; k< keyObjList[iQuart][jRoom].length; j++){
        if (keyObjList[iQuart][jRoom][k] != null){
              this.objs.add( this.add.image( 860 + j*100, 640, 'square').setDepth(2).setInteractive() );
        }
  }


  this.objs.children.iterate(function (child) {
      child.on('pointerover', function(){
              game.scene.scenes[2].rooms.children.iterate(function(child2){ child2.alpha = 0.5 });
              game.scene.scenes[2].objs.children.iterate(function(child3){ child3.alpha = 0.5 });
              this.alpha = 1;
          }, child);
      child.on('pointerout', function(){
              game.scene.scenes[2].rooms.children.iterate(function(child2){ child2.alpha = 1 });
              game.scene.scenes[2].objs.children.iterate(function(child3){ child3.alpha = 1 });
          });
      child.on('pointerdown', function(){
        kObj = getIndex(game.scene.scenes[2].objs, this)
        console.log(kObj);

        keyObj = keyObjList[iQuart][jRoom][kObj];
        //game.scene.scenes[2].scene.start("Scene3" );

      });

  }, this);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
  update(){

  }//END UPDATE


  }//END SCENE
