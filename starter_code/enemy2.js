function ObstacleEnemy(game){
  this.game = game;


  //this.imgshark = new Image ();
  //this.img.src = "/images/Scary_Shark_PNG_Clipart-449.png";

  this.w = 30;
  this.h = 20;

  this.dy = 8;
  var randomW = Math.random()*(canvas.width);
  var randomH = Math.random()*(700)-1000;

  this.x = randomW;
  this.y = randomH;
}



ObstacleEnemy.prototype.draw = function() {
  this.game.ctx.fillStyle = "red";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
}

ObstacleEnemy.prototype.move = function() {

  
  
    this.y += this.dy;
  };








