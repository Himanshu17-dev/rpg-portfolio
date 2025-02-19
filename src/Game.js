import Phaser from "phaser";
import React, { useEffect } from "react";

class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.spritesheet("hero", "/character.png", {
      frameWidth: 64,
      frameHeight: 64
    });
  }

  create() {
    this.hero = this.physics.add.sprite(400, 300, "hero");
    
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("hero", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.hero.play("walk");
  }

  update() {
    if (this.input.keyboard.checkDown(this.input.keyboard.addKey('LEFT'))) {
      this.hero.setVelocityX(-100);
      this.hero.flipX = true;
    } else if (this.input.keyboard.checkDown(this.input.keyboard.addKey('RIGHT'))) {
      this.hero.setVelocityX(100);
      this.hero.flipX = false;
    } else {
      this.hero.setVelocityX(0);
    }
  }
}

export default GameScene;

this.input.on("pointerdown", function (pointer) {
  let x = pointer.x;
  let y = pointer.y;

  let info = this.add.text(x, y, "You found a hidden skill!", {
    fontSize: "16px",
    fill: "#fff",
    backgroundColor: "#000"
  });

  this.time.delayedCall(2000, () => info.destroy(), [], this);
}, this);


