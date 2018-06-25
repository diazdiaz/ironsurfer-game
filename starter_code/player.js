function Player(game) {
  this.game = game;

  this.x = this.game.canvas.width / 2;

  this.y = this.game.canvas.height - 30;

  this.speed = -10;

  this.img = new Image();
  this.img.src = "";
  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.w = 50;
  this.h = 75;

  this.vy = 1;
  this.a = 1.5;
}

Player.prototype.draw = function() {
  this.game.ctx.fillRect(this.x, this.y, 50, this.y);
};
Player.prototype.setListener = function() {
  document.onkeydown = function(event) {
    if (event.keyCode == 37) {
      left = true;
      if(left){
        console.log(this.speed);
        this.x -= this.speed;
      }
    }
    if (event.keyCode == 39) {
      right = true;
      if(right){
        console.log(right);
        this.x += this.speed;
      }
    }
  }.bind(this);
  document.onkeyup = function(event) {
    if (event.keyCode == 37) {
      left = false;
      if(left){
        console.log(this.speed);
        this.x -= this.speed;
      }
      
    }
    if (event.keyCode == 39) {
      right = false;
      if(right){
        console.log(right);
        this.x += this.speed;
      }
      
    }

  }.bind(this);

};

