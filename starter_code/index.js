window.onload = function() {
  document.getElementById("empieza").onclick = function() {
   var game = new Game("canvas");
   document.getElementById("start").style.display = "none"
   game.start()
   
   
  }
};