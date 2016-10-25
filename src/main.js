let game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var s_chocobo = null;

// 10 wide
// 10 down
// 300 x 300



function preload() {
  game.load.spritesheet('chocobo', './src/sprites/chocobo.png', 30, 30)
}

function create() {
  game.stage.backgroundColor = "#3A1D47";

  game.add.text(
    game.width/2, game.height/2,
    "Hello World! \n It seams the basics are working! \n Press Ctrl+W to close.",
    {
      font: "bold 36px monospace",
      fill: "#eee",
      align: "center"
    }
  ).anchor.set(0.5);

  s_chocobo = game.add.sprite(game.width/2, 500, 'chocobo');
  s_chocobo.anchor.set(0.5);
  s_chocobo.scale.set(3);
  s_chocobo.animations.add('run_right', [15, 16, 17, 18]);
  s_chocobo.animations.play('run_right', 6, true);
}

function update() {
}
