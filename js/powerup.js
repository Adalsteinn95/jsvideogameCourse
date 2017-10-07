// A constructor for powerups
function Powerup(descr) {
  for (var property in descr) {
    this[property] = descr[property];
  }
}
var g_powerups = [];

Powerup.prototype.render = function(ctx) {
  if (this.check) {
    ctx.fillStyle = "#7FFF00";
    ctx.fillRect(this.x, this.y, this.r * 2, this.r * 2);
  } else {
    this.check = false;
  }
  ctx.fillStyle = "black";
}

Powerup.prototype.update = function(du) {
  this.y += this.gravity;
  /*Remember last position*/

  var prevX = this.x;
  var prevY = this.y;

  /*compute next position*/
  var nextX = this.x + this.gravity;
  var nextY = this.y + this.gravity;

  if (g_paddle1.collidesWith(prevX, prevY, nextX, nextY, this.r - 10)) {
    this.check = false;
  }



}
