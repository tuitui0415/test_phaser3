let config = {
    type: Phaser.AUTO,
    width: 512,
    heigth: 200,
    physics: {
        default: "arcade"
    },
    scene: [test]
}


let game = new Phaser.Game(config);

//let m;