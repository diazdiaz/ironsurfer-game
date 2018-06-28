function Player(game) {
  this.game = game;

  this.img = new Image();
  this.img.src = "images/surfboard clipart.png";

  this.x = 300;
  this.y = 690; //750
  
  this.w = 80;
  this.h = 75;

  
  this.moveRight = false;
  this.moveLeft = false;
  
  

  this.vx = 1;
  this.vy = 1;

  this.ax = 5;
  this.ay = 5;

  this.setListener()

  
  
  //this.img.frames = 3;
  //this.img.frameIndex = 0;



}

 
Player.prototype.draw =  function() {
  this.game.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h)
};

Player.prototype.setListener = function () {

var rightKey = 39;
var leftKey = 37;

document.onkeydown = function (event) {
    
  if (event.keyCode === rightKey ) {
    this.moveRight = true;
  }

  if(event.keyCode === leftKey ){
    this.moveLeft = true;
  }


  
}.bind(this);

document.onkeyup = function (event){
  if(event.keyCode === rightKey){
    this.moveRight = false;
  }
  if(event.keyCode === leftKey){
    this.moveLeft = false;
  }
  
}.bind(this);
}

Player.prototype.move = function() {

if (this.moveRight == true && this.x < this.game.canvas.width - (this.w)) {
this.x += this.vx * this.ax;
}
if (this.moveLeft == true && this.x > 0){
this.x -= this.vx * this.ax;
}

};






