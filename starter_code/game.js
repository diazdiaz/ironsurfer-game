function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  
  this.framesCounter = 0;
  this.framesTime = 0;

  //this.maxLife = false;

this.interval;

this.background = new Background(this);
this.player = new Player(this);
this.score = new Score(this);

this.obstacles = [];
this.obstacleEnemy = [];
console.log(this.obstacleEnemy);
this.obstacleNumber = 6;

// this.soundtrack = new Audio("sound/soundtrack.mp3");
// this.gameOverSound = new Audio("sound/gameOver.mp3")
// this.soundtrackGameOver = new Audio("sound/soundtrackGameOver.mp3");
}

Game.prototype.start = function() {
  this.interval = setInterval(
    function() {
 
      this.framesCounter++;
      this.framesTime++;
      if (this.framesCounter > 1000) this.framesCounter = 0;
      // console.log(this.framesTime);

      this.clear();
      this.move();
      this.draw();
      //this.isCollision()
      // this.background.draw();
      // this.background.move();
      // this.player.draw();
      // this.player.move();
      // this.enemy[0].draw();
      // this.enemy[0].move();
      
      this.updateObs();
    

      
      if (this.framesTime < 900) {
         
        if (this.framesCounter % 150 === 0) {
          console.log("sdsdsdsd")
          
          this.generateEnemy();
        }
      } else if (this.framesTime > 1000 ) {
          //this.maxLife = true;
          //this.score.drawLevel();
        

      
        if (this.framesCounter % 40 === 0) {
          this.generateEnemy();
        }
        if (this.framesCounter % 1000 === 0) {
          
        }
      }
      
      if (this.score.lives == 0) {
        
        this.gameOver();
        //this.soundGameOver.play();
      }
    }.bind(this),
    1000 / 60
  );
};

//------Clear------//
Game.prototype.clear = function() {
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//this.obstacles.forEach(function(e) {
    //e.clearObstacles();????? HACE FALTA?
 // });
  this.obstacleEnemy.forEach(function(e) {
    e.clearEnemy();
  });
};

//------Collision-----//
Game.prototype.isCollision = function() {
  return this.obstacleEnemy.some(function(obstacleEnemy) {
    return ( (this.player.x < this.obstacleEnemy[i].x + this.obstacleEnemy[i].w &&
      this.player.x + this.player.w > this.obstacleEnemy[i].x &&
      this.player.y < this.obstacleEnemy[i].y + this.obstacleEnemy[i].h &&
      this.player.h + this.player.y > this.obstacleEnemy[i].y)
      
    );
  }.bind(this));
};

//Generate//

Game.prototype.generateObstacle = function() {
  //for loop
  for (var i = 0; i < this.obstacleNumber; i++) {
    this.obstacles.push(new Obstacle(this));
  } 
}  
Game.prototype.generateEnemy = function() {
  this.obstacleEnemy.push(new ObstacleEnemy(this));
  console.log("sdsdsdsd")
}

//--Draw--//
Game.prototype.draw = function(){
  this.background.draw();
  this.score.drawScore();
  this.score.drawLives();
  
  
  
  
//-Falta dibujar los obstaculos--//
this.obstacleEnemy.forEach(function(o) { o.drawEnemy(); })
}

//----Move-----//

Game.prototype.move = function(){
  this.background.move();
  this.player.move();
}
//-Falta mover los obstaculos --//
this.obstacleEnemy.forEach(function(o) { o.moveEnemy(); })

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
  this.generateObstacle();
  

};

//----Game Over---

Game.prototype.gameOver = function() {
  this.stop();

};




    
 Game.prototype.updateObs = function() {

  for (var i = 0; i < this.obstacleNumber; i++) {
    
  
    this.obstacles[i].move();
    this.obstacles[i].draw();
   

    if (this.obstacles[i].y >= 750) {
      this.obstacles[i].y = 0;
      this.obstacles[i].x = Math.random() * 600;
    }
    if(this.player.x < this.obstacles[i].x + this.obstacles[i].w &&
      this.player.x + this.player.w > this.obstacles[i].x &&
      this.player.y < this.obstacles[i].y + this.obstacles[i].h &&
      this.player.h + this.player.y > this.obstacles[i].y) {
        this.obstacles[i].y=0
        this.obstacles[i].x = Math.random()*(canvas.width);
        this.obstacles.push(new Obstacle(this));
        this.obstacleNumber++
        this.score.lives -=5
        // console.log(this.score.health)
        if (this.obstacleNumber > 20){
          this.obstacleNumber=20
          this.obstacles.pop()
          console.log(this.obstacles)
        }
      
        //console.log(this.obstacles)

      }
    }
  }


// Game.prototype.isCollision = function() {
//   return this.obstacles.some(
//     function(obstacle) {
//       return (
//         this.player.x < obstacle.x + obstacle.w &&
//         this.player.x + this.player.w > obstacle.x &&
//         this.player.y < obstacle.y + obstacle.h &&
//         this.player.h + this.player.y > obstacle.y
        
//       ); {
        
        
//       }

//     }.bind(this)
//   );
// };

// Game.prototype.clear = function() {
//   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
// };