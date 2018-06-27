function Score(game){
  this.game = game;

  this.points = this.game.framesCounter;
  this.health = 100;

}
 
Score.prototype.drawScore = function(){
  this.game.ctx.font = "Arial";
  this.game.ctx.fillStyle = '#fff';
  this.game.ctx.fillText('Score:'+(this.points), 500, 600);
  this.game.ctx.textBaseline = "top";
};

Score.prototype.drawHealth = function(){
  this.game.ctx.font = "14px Arial";
  this.game.ctx.fillStyle = '#fff';
  this.game.ctx.fillText('Health:'+(this.health), 300, 300);
  this.game.ctx.textBaseline = "top";
};