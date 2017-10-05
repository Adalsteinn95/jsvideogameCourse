// A generic constructor which accepts an arbitrary descriptor object
function Paddle(descr) {
  for (var property in descr) {
    this[property] = descr[property];
  }
}

// Add these properties to the prototype, where they will server as
// shared defaults, in the absence of an instance-specific overrides.

Paddle.prototype.halfWidth = 60;
Paddle.prototype.halfHeight = 10;

Paddle.prototype.update = function(du) {
  if (g_keys[this.GO_LEFT] && this.cx > this.halfWidth) {
    if (this.cx > this.halfWidth) {
      this.cx -= 10
    }
  } else if (g_keys[this.GO_RIGHT] && this.cx < g_canvas.width - this.halfWidth) {
    if (this.cx < g_canvas.width - this.halfWidth) {
      this.cx += 10;
    }
  }
};

Paddle.prototype.render = function(ctx) {
  ctx.fillRect(this.cx - this.halfWidth, this.cy - this.halfHeight, this.halfWidth * 2, this.halfHeight * 2);
};

Paddle.prototype.collidesWith = function(prevX, prevY, nextX, nextY, r) {
  var paddleEdge = this.cx;

  // Check X coords
  if ((nextX - r < paddleEdge + this.halfWidth &&
       prevX - r >= paddleEdge - this.halfWidth) ||
      (nextX + r > paddleEdge - this.halfWidth &&
       prevX + r <= paddleEdge + this.halfWidth)) {
    // Check Y coords
    if (nextY + r >= this.cy - this.halfHeight &&
        nextY - r <= this.cy + this.halfHeight) {
      // It's a hit!
      console.log(g_ball);
      g_ball.paddlehit = this.cx - nextX;
      return true;
    }
  }
  // It's a miss!
  return false;
};
