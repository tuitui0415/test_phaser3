class test extends Phaser.Scene{
    constructor(){
        super("testScene");
    }
    
    preload(){
        this.load.path = 'assets/';
        this.load.image('background','LoZ-overworld-up.gif');
        this.load.image('character','temp.png');
    }

    create(){
        this.add.image(256,118,'background');
        //game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.cashier=this.add.image(150,200,'character');

        this.fruit=this.add.image(100,50,'character').setInteractive({draggable: true});
        this.fruit.on('drag',function(pointer,dragX,dragY){
                this.x=dragX;
                this.y=dragY;
        });
        this.physics.add.existing(this.fruit);
        this.physics.add.existing(this.cashier);
        this.fruit.body.setCollideWorldBounds(true);
        this.physics.add.collider(this.fruit,this.cashier);
        this.physics.add.overlap(this.fruit, this.cashier, function (fruit, cashier) {
            fruit.destroy();
            //cashier.destroy();
          }, null, this);

        //this.cashier=this.add.image(0,0,'character');

        //this.physics.add.overlap(this.fruit,this.cashier);
        
    }
}