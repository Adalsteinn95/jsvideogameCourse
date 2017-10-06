// ==========
// BALL STUFF
// ==========

// BALL STUFF

var g_ball = {
  cx: 50,
  cy: 200,
  radius: 5,

  xVel: 5,
  yVel: 5,
  paddlehit: 10,


};

g_ball.update = function(du) {
  // Remember my previous position
  var prevX = this.cx;
  var prevY = this.cy;

  // Compute my provisional new position (barring collisions)
  var nextX = prevX + this.xVel * du;
  var nextY = prevY + this.yVel * du;

  // bounce off the bricks
  var hit = g_wall.collidesWith(prevX, prevY, nextX, nextY, this.radius);
  this.xVel *= hit[0];
  this.yVel *= hit[1];


  // Bounce off the paddle
  if (g_paddle1.collidesWith(prevX, prevY, nextX, nextY, this.radius)) {
    this.yVel *= -1;
  }

  // Bounce off all edges
  if (nextY < 0 + this.radius - 2 || // top edge
  nextY > g_canvas.height) { // bottom edge
    this.yVel *= -1;
  }
  if (nextX < 0 + this.radius - 2) {
    this.xVel *= -1;
  }
  if (nextX > g_canvas.width) {
    this.xVel *= -1;
  }

  // *Actually* update my position
  // ...using whatever velocity I've ended up with
  //
  this.cx += this.xVel * du;
  this.cy += this.yVel * du;
};

g_ball.reset = function() {
  this.cx = 300;
  this.cy = 100;
  this.xVel = -5;
  this.yVel = 4;
};

g_ball.render = function(ctx) {
  fillCircle(ctx, this.cx, this.cy, this.radius);
};

/*
g_ball.angle = function(){

  if(this.paddlehit > 40 && this.xVel > 0 || this.paddlehit < -40 && this.xVel < 0){
    this.xVel *= -1;
  }
}
*/
