class GameObject extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, asset){
    //Private
        var _frame = 0;
        super(scene, x, y, asset);

        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.setInteractive();

        this.getCurrentFrame = function(){return _frame};
        this.setCurrentFrame = function(frame){ _frame = frame;};

    }//END CONSTRUCTOR
}//END ENTITEE
