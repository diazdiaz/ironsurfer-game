function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.reset();
}


Game.prototype.reset = function () {
  this.background = new Background(this);
  this.player = new Player(this);
 
  this.obstacles = [];
  this.framesCounter = 0;
  this.score = 0;

}

Game.prototype.start = function () {
  this.inteval = setInterval(function(){
    this.clear();
    this.background.move();
    this.player.draw();
    this.player.setListener();
    

  }.bind(this),1000/60)
}

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};



