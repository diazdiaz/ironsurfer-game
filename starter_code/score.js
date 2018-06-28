function Score(game){
  this.game = game;

  this.points = 0;
  this.lives = 100;

}
 
Score.prototype.drawScore = function(){

  this.game.ctx.font = "16px Arial";
  this.game.ctx.fillStyle = '#fff';
  this.game.ctx.fillText('Score:'+(this.points),  30, 30);
  this.game.ctx.textBaseline = "top";
};

Score.prototype.drawLives = function(){
  if (this.lives < 25 ) {
  this.game.ctx.font = "16px Arial";
  this.game.ctx.fillStyle = 'red';
  this.game.ctx.fillText('Lives:'+(this.lives),  480, 30);
  this.game.ctx.textBaseline = "top";
  } else {
    this.game.ctx.font = "18px Arial";
  this.game.ctx.fillStyle = '#fff';
  this.game.ctx.fillText('Lives:'+(this.lives),  480, 30);
  this.game.ctx.textBaseline = "top";
  }
};