let config = {
    type: Phaser.AUTO,
    width: 512,
    heigth: 336,
    physics: {
        default: "arcade"
    },
    scene: [test]
}


let game = new Phaser.Game(config);
