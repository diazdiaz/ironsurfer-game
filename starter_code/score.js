function Score(game){
  this.game = game;

  this.points = 0;
  this.health = 100;

}
 
Score.prototype.drawScore = function(){
  this.game.ctx.font = "";
  this.game.ctx.fillStyle = '#fff';
  this.game.ctx.fillText('Score:'+Math.floor(this.points), 630.5, 25);
  this.game.ctx.textBaseline = "top";
};

Score.prototype.drawLives = function(){
  this.game.ctx.font = "14px 'Press Start 2P'";
  this.game.ctx.fillStyle = '#fff';
  this.game.ctx.fillText('Lives:'+Math.floor(this.lives), 1150, 25);
  this.game.ctx.textBaseline = "top";
};