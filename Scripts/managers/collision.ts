module managers {
  export class Collision {

    public static Check(object1: objects.GameObject, object2: objects.GameObject) {
      // create two vec2 objects
      let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
      let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

      if (math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
        if (!object2.isColliding) {
          object2.isColliding = true;
          switch (object2.name) {
            case "coin":
              if ((object2.alpha != 0) && (object1.alpha != 0)) {

                createjs.Sound.play("cupcakeSound");
                managers.Game.scoreBoard.Score += 100;
                object2.alpha = 0;

                // add a life power up
                if (managers.Game.scoreBoard.Score % 1000 == 0) {
                  managers.Game.scoreBoard.Lives += 1;
                  createjs.Sound.play("life");
                }
              }
              break;
            case "cloud":
              if (object1.alpha != 0) {
                createjs.Sound.play("explosion");
                managers.Game.scoreBoard.Lives -= 1;

                // let explosion = new objects.Explosion("explosion");
                // explosion.x = object1.x;
                // explosion.y = object1.y;
                // managers.Game.Object.addChild(explosion);
                // object1.alpha = 0; // make the plane object invisible
                // managers.Game.plane.planeFlash.alpha = 1;
                // managers.Game.plane.planeFlash.gotoAndPlay("planeflash");
              }
              break;
            case "enemy2":
            if (object1.name == "bubble") {
              createjs.Sound.play("explosion");
              // let explosion = new objects.Explosion("explosion");
              // explosion.x = object2.x;
              // explosion.y = object2.y;
              // managers.Game.currentSceneObject.addChild(explosion);
              managers.Game.scoreBoard.Score += 200;
              object2.Reset();
            }
            else if (object1.name == "mira") {
              createjs.Sound.play("explosion");
              // let explosion = new objects.Explosion("explosion");
              // explosion.x = object2.x;
              // explosion.y = object2.y;
              // managers.Game.currentSceneObject.addChild(explosion);
              managers.Game.scoreBoard.Lives -= 2;
              object2.Reset();
            }
              break;
            case "enemy1":
              if (object1.name == "bubble") {
                createjs.Sound.play("explosion");
                // let explosion = new objects.Explosion("explosion");
                // explosion.x = object2.x;
                // explosion.y = object2.y;
                // managers.Game.currentSceneObject.addChild(explosion);
                managers.Game.scoreBoard.Score += 200;
                object2.Reset();
              }
              else if (object1.name == "mira") {
                createjs.Sound.play("explosion");
                // let explosion = new objects.Explosion("explosion");
                // explosion.x = object2.x;
                // explosion.y = object2.y;
                // managers.Game.currentSceneObject.addChild(explosion);
                managers.Game.scoreBoard.Lives -= 1;
                object2.Reset();
              }
              break;
          }
        }
      }
      else {
        object2.isColliding = false;
      }
    }
  }
}
