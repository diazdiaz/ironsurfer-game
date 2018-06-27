function Obstacle(game) {
  this.game = game;

  this.img = new Image ();
  this.img.src = "./images/Scary_Shark_PNG_Clipart-449.png";

  this.w = 40;
  this.h = 40;

  this.dy = 5;
  var randomW = Math.random()*(canvas.width);
  var randomH = Math.random()*(700)-1000;

  this.x = randomW;
  this.y = randomH;
}

Obstacle.prototype.draw = function() {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h)
};





Obstacle.prototype.move = function() {
  this.y += this.dy;
};


Obstacle.prototype.generateObstacle = function() {
  //for loop
  for (var i = 0; i < 5; i++) {
    this.obstacles.push(new Obstacle(this));
    this.obstacles[i].move();
    this.obstacles[i].draw();
  
  if (this.obstacles[i].y >= 750) {
    this.obstacles[i].y=0;
    this.obstacles[i].x=Math.random()*600
  }
} 
}


