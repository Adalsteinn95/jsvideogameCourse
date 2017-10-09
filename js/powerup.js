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
  /*add gravity on powerup*/
  this.y += this.gravity;

  /*Remember last position*/
  var prevX = this.x;
  var prevY = this.y;

  /*compute next position*/
  var nextX = this.x + this.gravity;
  var nextY = this.y + this.gravity;

  if (g_paddle1.collidesWith(prevX, prevY, nextX, nextY, this.r - 10)) {
    this.randomPower();
    this.check = false;
  }

}

Powerup.prototype.randomPower = function(){
  /*powerup that makes the paddle smaller*/

  if(g_paddle1.halfWidth > 10){
    if(this.power === "getsmaller"){
      g_paddle1.halfWidth -= 10;
    }
  }

  /*powerup that makes the paddle bigger*/
  if(this.power === "getbigger"){
    g_paddle1.halfWidth += 10;
  }

  /*powerup that adds a ball*/

  if(this.power === "anotherball"){
    var ball = new Ball({
      cx: 10,
      cy: 100,
      radius: 5,

      xVel: 5,
      yVel: 5,
      paddlehit: 10,

    });

    g_balls.push(ball);
    console.log(g_balls);
  }
  /*powerup that adds speed*/
  if(this.power === "speedUp"){
    g_morespeed += 0.2;
  }
  /*powerup that takes speed */
  if(this.power === "speedDown"){
    g_morespeed -= 0.2;
  }
}
