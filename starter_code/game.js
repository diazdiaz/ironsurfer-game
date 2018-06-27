function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.maxLife;
  this.framesCounter;
  this.reset();
}

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.score = new Score(this);

  this.score.points = 0;
  this.obstacles = [];
  this.enemy = [];
  
  console.log(this.enemy) ;
  this.generateEnemy();
  
  this.framesCounter = 0;
  this.framesTime = 0;
  console.log(framesTime);
  this.obstacleNumber = 6;
  this.generateObstacle();
  this.score.lives = 10;
};

Game.prototype.start = function() {
  this.interval = setInterval(
    function() {
      this.framesCounter++;
      this.framesTime++;
      if (this.framesCounter > 1000) this.framesCounter = 0;
      // console.log(this.framesTime);

      this.clear();
      this.draw();
      //this.background.draw();
      this.background.move();
      //this.player.draw();
      this.player.move();
      this.updateObs();
      this.enemyUpdate();
      //this.enemyCollision();
      //console.log(this.framesTime);

      if (this.framesTime < 400) {
        if (this.framesCounter % 200 === 0) {
          this.generateEnemy(1);
        }
      } else {
        this.maxLife = true;

        if (this.framesCounter % 200 === 0) {
          this.generateEnemy(2);
        }
        if (this.framesCounter % 400 === 0) {
          this.generateEnemy(4);
        }
      }

      if (this.score.health <= 0) {
        this.gameOver();
      }
    }.bind(this),
    1000 / 60
  );
};

//Draw//

Game.prototype.draw = function () {
  this.background.draw ();
  this.player.draw ();
  this.score.drawScore ();
  this.score.drawHealth ();
}


//Game Over
Game.prototype.gameOver = function() {
  this.stop();
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

//Generate//

Game.prototype.generateObstacle = function() {
  //for loop
  for (var i = 0; i < this.obstacleNumber; i++) {
    this.obstacles.push(new Obstacle(this));
    
  }
};
Game.prototype.generateEnemy = function(v) {
  for (i = 0; i < v; i++) {
    this.enemy.push(new ObstacleEnemy(this));
  }
};

Game.prototype.enemyUpdate = function() {
  for (i = 0; i < this.enemy.length; i++) {
    this.enemy[i].draw();
    this.enemy[i].move();

     if (collision) {
       this.enemy[i].y= 0;
       this.enemy[i].x= 
       this.score.health -= 5;

     }

  }
};

Game.prototype.updateObs = function() {
  for (var i = 0; i < this.obstacleNumber; i++) {
    this.obstacles[i].move();
    this.obstacles[i].draw();

    if (this.obstacles[i].y >= 750) {
      this.obstacles[i].y = 0;
      this.obstacles[i].x = Math.random() * 600;
      
    }

    var collision = 
        this.player.x < this.obstacles[i].x + this.obstacles[i].w &&
        this.player.x + this.player.w > this.obstacles[i].x &&
        this.player.y < this.obstacles[i].y + this.obstacles[i].h &&
        this.player.h + this.player.y > this.obstacles[i].y

    if (collision) {
      
      this.obstacles[i].y = 0;
      this.obstacles[i].x = Math.random() * canvas.width;
      this.obstacles.push(new Obstacle(this));
      this.obstacleNumber++;
      this.score.health -= 5;
      
      
      // console.log(this.score.health)
      if (this.obstacleNumber > 20) {
        this.obstacleNumber = 20;
        this.obstacles.pop();
        //console.log(this.obstacles);
      }

      //console.log(this.obstacles)
    }
  }
};



// Game.prototype.enemyCollision= function () {
// if (collision) {
  
// }
// }
// Game.prototype.isCollision = function() {
//   return this.obstacles.some(
//     function(obstacle) {
//       return collision;
//       {
//       }
//     }.bind(this)
//   );
// };

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};
