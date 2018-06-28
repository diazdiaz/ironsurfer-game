function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");

  this.framesCounter = 0;
  this.framesTime = 0;
  this.difficulty = 80;
  
  this.reset();

  //this.maxLife = false;

  // this.soundtrack = new Audio("sound/soundtrack.mp3");
  // this.gameOverSound = new Audio("sound/gameOver.mp3")
  // this.soundtrackGameOver = new Audio("sound/soundtrackGameOver.mp3");
}

Game.prototype.start = function() {
  this.interval = setInterval(
    function() {
      this.clear();
      this.framesCounter++;
      this.framesTime++;
      this.score.points++;
      this.move();
      this.draw();
      console.log(this.difficulty);
      this.difficultygen();
      this.updateObs();

      // for(i=0;i<this.obstacleEnemy.length;i++){
      //   o.drawEnemy();
      //   o.moveEnemy();
      // }
      
      // if (this.framesTime < 1000) {
       if (this.framesCounter % this.difficulty === 0) {
         
           this.generateEnemy();
        }
      // } else if (this.framesTime > 1000) {
      //   //this.maxLife = true;
      //   //this.score.drawLevel();

      //   if (this.framesCounter % 40 === 0) {
      //     this.generateEnemy();
      //   }
      //   if (this.framesCounter % 1000 === 0) {
      //   }
      // }

      if (this.score.lives == 0) {
        this.gameOver();
        //this.soundGameOver.play();
      }
    }.bind(this),
    1000 / 60
  );
};

//------Difficulty-----//
Game.prototype.difficultygen = function () {
  if (this.score.points % 70 == 0) {
    
    this.difficulty = this.difficulty - 10 ; 
  }
  if (this.difficulty < 30) {
    this.difficulty = 30
    
  }

}

//------Clear------//
Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //this.obstacles.forEach(function(e) {
  //e.clearObstacles();????? HACE FALTA?
  // });
  // this.obstacleEnemy.forEach(function(e) {
  //   e.clearEnemy();
  // });
};

//Generate//

Game.prototype.generateObstacle = function() {
  //for loop
  for (var i = 0; i < this.obstacleNumber; i++) {
    this.obstacles.push(new Obstacle(this));
  }
};
Game.prototype.generateEnemy = function() {
  this.obstacleEnemy.push(new ObstacleEnemy(this));
};

//--Draw--//
Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.score.drawScore();
  this.score.drawLives();

  //-Falta dibujar los obstaculos--//
  this.obstacleEnemy.forEach(function(o) {
    o.drawEnemy();
  });
};

//----Move-----//

Game.prototype.move = function() {
  this.background.move();
  this.player.move();
  this.obstacleEnemy.forEach(function(o) {
    o.moveEnemy();
  });
};
//-Falta mover los obstaculos --//

//----Stop-----//
Game.prototype.stop = function() {
  clearInterval(this.interval);
};

//-----Reset ----//

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.score = new Score(this);
  //this.soundtrack = new Audio("src");
  this.score.points = 0;
  this.score.lives = 100;
  this.obstacles = [];
  this.obstacleEnemy = [];

  // console.log(this.enemy) ;
  this.generateEnemy();

  this.framesCounter = 0;
  this.framesTime = 0;
  this.obstacleNumber = 6;
  this.difficulty = 80;
  this.generateObstacle();
};

//----Game Over---

Game.prototype.gameOver = function() {
  this.stop();
  if (confirm("GAME OVER. Play again?")) {
    this.reset();
    this.start();
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
    if (
      this.player.x < this.obstacles[i].x + this.obstacles[i].w &&
      this.player.x + this.player.w > this.obstacles[i].x &&
      this.player.y < this.obstacles[i].y + this.obstacles[i].h &&
      this.player.h + this.player.y > this.obstacles[i].y
    ) {
      this.obstacles[i].y = 0;
      this.obstacles[i].x = Math.random() * canvas.width;
      this.obstacles.push(new Obstacle(this));
      this.obstacleNumber++;
      this.score.lives -= 5;
      // console.log(this.score.health)
      if (this.obstacleNumber > 20) {
        this.obstacleNumber = 20;
        this.obstacles.pop();
       
      }

      //enemy collision

      //console.log(this.obstacles)
    }
  }
  for (j = 0; j < this.obstacleEnemy.length; j++) {

    if (
      this.player.x < this.obstacleEnemy[j].x + this.obstacleEnemy[j].w &&
      this.player.x + this.player.w > this.obstacleEnemy[j].x &&
      this.player.y < this.obstacleEnemy[j].y + this.obstacleEnemy[j].h &&
      this.player.h + this.player.y > this.obstacleEnemy[j].y
    ) {
      this.obstacleEnemy.splice(j,1)
      
      this.score.lives -= 5;
      
      
    }
  }
};