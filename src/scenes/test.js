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
        this.add.text(20,20,"test");
    }
}