function ObstacleEnemy(game) {
  this.game = game;

  //this.imgshark = new Image ();
  //this.img.src = "/images/Scary_Shark_PNG_Clipart-449.png";

  this.w = 30;
  this.h = 20;

  this.dy = 8;
  var randomW = Math.random() * canvas.width;
  var randomH = Math.random() * 700 - 1000;

  this.x = randomW;
  this.y = randomH;
}

ObstacleEnemy.prototype.drawEnemy = function() {
  this.game.ctx.fillStyle = "red";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
};

ObstacleEnemy.prototype.moveEnemy = function() {
  this.y += this.dy;
};

// ObstacleEnemy.prototype.clearEnemy = function() {
//   this.game.obstacleEnemy = this.game.obstacleEnemy.filter(function(o) {
//     return o.y > 0;
//   });
// };
