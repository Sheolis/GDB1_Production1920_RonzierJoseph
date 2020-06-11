class Scene1 extends Phaser.Scene{
    constructor() {
        super('Scene1')
      }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
init(){
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
preload(){
    this.load.image('background','_assets/background.png');
    this.load.image('square', '_assets/clicSpot.png');

    this.load.image('villeCentre','_assets/villeMid_Divers.png');
    this.load.image('villeCentreUsine','_assets/villeMid_Usine.png');
    this.load.image('roomUsine','_assets/Usine_room.png');


    this.load.image('villeBas1','_assets/villeBot_Divers.png');
    this.load.image('villeBas1Stade','_assets/villeBot_Stade.png');
    this.load.image('villeBas1Buildings','_assets/villeBot_Buildings.png');
    this.load.image('quartierStade','_assets/Stade.png');
    this.load.image('roomTribune','_assets/Stade_tribune.png');
    this.load.image('roomBathBas','_assets/BuildingsBot_bathroom.png');
    this.load.image('roomBas','_assets/BuildingsBot_room.png');
    this.load.image('objDeskBot','_assets/room_desk2.png');

    this.load.image('villeBas2','_assets/villeSupp_Divers.png');
    this.load.image('villeBas2Cath','_assets/villeSupp_Cathedrale.png');


    this.load.image('villeHaut','_assets/villeTop_Divers.png');
    this.load.image('villeHautBuildings','_assets/villeTop_Buildings.png');
    this.load.image('quartierBuild','_assets/BuildingsTop.png');
    this.load.image('roomOpenSpace','_assets/BuildingsTop_opensSpace.png');
    this.load.image('roomTop','_assets/BuildingsTop_Room.png');
    this.load.image('objDeskTop','_assets/room_desk.png');

}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
create(){
    keyQuartierList = [null, 'quartierBuild', 'villeCentreUsine', 'villeBas2Cath', 'villeBas1Buildings', 'quartierStade' ];
    keyRoomList = [[null], ['roomOpenSpace', 'roomTop'], ['roomUsine'], [null], ['roomBathBas', 'roomBas'], ['roomTribune']];
    keyObjList = [[[null]], [[null], ['objDeskTop']], [[null]], [[null]], [[null], ['objDeskBot']], [[null]]];

    this.add.image(960, 540, 'background');

    this.villes = this.add.group({ key : 'ville'});
    this.villes.add( this.add.image(1171, 404, 'villeHaut' ).setDepth(1).setScale(0.6) );
    this.villes.add( this.add.image(960, 540, 'villeCentre' ).setDepth(2).setScale(0.6) );
    this.villes.add( this.add.image(745, 655, 'villeBas2' ).setDepth(3).setScale(0.6) );
    this.villes.add( this.add.image(533, 793, 'villeBas1' ).setDepth(3).setScale(0.6) );

    this.quartiers = this.add.group( {key: 'quartier'});
    this.quartiers.add( this.add.image(985, 305, 'villeHautBuildings' ).setDepth(1).setInteractive().setScale(0.6));
    this.quartiers.add( this.add.image(1085, 487, 'villeCentreUsine' ).setDepth(2).setInteractive().setScale(0.6));
    this.quartiers.add( this.add.image(800, 600, 'villeBas2Cath' ).setDepth(3).setInteractive().setScale(0.6));
    this.quartiers.add( this.add.image(347, 640, 'villeBas1Buildings' ).setDepth(3).setInteractive().setScale(0.6));
    this.quartiers.add( this.add.image(620, 890, 'villeBas1Stade' ).setDepth(3).setInteractive().setScale(0.6));

    this.quartiers.children.iterate(function (child) {
        child.on('pointerover', function(){
                game.scene.scenes[0].villes.children.iterate(function(child2){ child2.alpha = 0.5 });
                game.scene.scenes[0].quartiers.children.iterate(function(child3){ child3.alpha = 0.5 });
                this.alpha = 1;
            }, child);
        child.on('pointerout', function(){
                game.scene.scenes[0].villes.children.iterate(function(child2){ child2.alpha = 1 });
                game.scene.scenes[0].quartiers.children.iterate(function(child3){ child3.alpha = 1 });
            });
        child.on('pointerdown', function(){
            iQuart = getIndex(game.scene.scenes[0].quartiers, this)

            keyQuartier = keyQuartierList[iQuart];
            game.scene.scenes[0].scene.start("Scene2" );
        });

    }, this);


}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
  update(){

  }//END UPDATE


  }//END SCENE
