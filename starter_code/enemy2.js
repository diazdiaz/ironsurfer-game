function ObstacleEnemy(game) {
  this.game = game;

  this.imgfish = new Image ();
  this.imgfish.src = "./images/Green_Octopus_PNG_Clipart-436.png";

  this.w = 70;
  this.h = 70;

  this.dy = 8;
  var randomW = Math.random() * canvas.width;
  var randomH = Math.random() * 700 - 1000;

  this.x = randomW;
  this.y = randomH;
}


 ObstacleEnemy.prototype.drawEnemy = function() {
   this.game.ctx.drawImage(
     this.imgfish,
     this.x,
     this.y,
     this.w,
     this.h)
 };


// ObstacleEnemy.prototype.drawEnemy = function() {
//   this.game.ctx.fillStyle = "red";
//   this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
// };

ObstacleEnemy.prototype.moveEnemy = function() {
  this.y += this.dy;
};

// ObstacleEnemy.prototype.clearEnemy = function() {
//   this.game.obstacleEnemy = this.game.obstacleEnemy.filter(function(o) {
//     return o.y > 0;
//   });
// };
