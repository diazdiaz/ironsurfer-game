function Background(game) {
  this.game = game;
  
  this.img = new Image();
  this.img.src = "./images/sea_image.png";

  this.x = 0;
  this.y = 0;

}

Background.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
  this.game.ctx.drawImage(this.img, this.x + this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);
 
};

Background.prototype.move = function() {
  this.speed = -1;
  this.y += this.speed;
  this.y %= this.game.canvas.height;
  
  // if (this.speed < 0) {
  //   this.game.ctx.drawImage(this.img, 0, this.y);
  // } else {
  //   this.game.ctx.drawImage(this.img, 0, this.y);
  // }
  this.game.ctx.drawImage(this.img, 0, 0,this.game.canvas.width,this.game.canvas.height);
  

}