import Phaser from "phaser";
import React, { useEffect } from "react";

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  preload() {
    this.load.image("character", "/character.png"); // Place your image in /public
  }

  create() {
    this.add.text(100, 50, "Welcome to Himanshu's RPG Portfolio", {
      font: "20px Arial",
      fill: "#ffffff",
    });
    this.character = this.add.sprite(150, 150, "character").setInteractive();
    this.character.on("pointerdown", () => alert("Character Selected!"));
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: GameScene,
  parent: "game-container",
  transparent: true, // Makes Phaser use the body's background
};
;

const Game = () => {
  useEffect(() => {
    new Phaser.Game(config);
  }, []);

  return <div id="game-container"></div>;
};

export default Game;
