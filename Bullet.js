// ======
// BULLET
// ======

"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

/*
0        1         2         3         4         5         6         7         8
12345678901234567890123456789012345678901234567890123456789012345678901234567890
*/


// A generic contructor which accepts an arbitrary descriptor object
function Bullet(descr) {
    for (var property in descr) {
        this[property] = descr[property];
    }
}


// Convert times from seconds to "nominal" time units.
Bullet.prototype.lifeSpan = 3 * SECS_TO_NOMINALS;


Bullet.prototype.update = function (du) {

    if(this.lifeSpan > 0){
      this.lifeSpan -= du;
    } else {
      this.alife = -1;
      this.opacity = 1;
    }

    this.rotation += du;

    this.cx += this.velX * du;
    this.cy += this.velY * du;


    // TODO: Implement this

    // NB: Remember to handle screen-wrapping... and "death"
};

Bullet.prototype.setPos = function (cx, cy) {
    this.cx = cx;
    this.cy = cy;
}

Bullet.prototype.getPos = function () {
    return {posX : this.cx, posY : this.cy};
}

Bullet.prototype.wrapPosition = function () {
    this.cx = util.wrapRange(this.cx, 0, g_canvas.width);
    this.cy = util.wrapRange(this.cy, 0, g_canvas.height);
};

Bullet.prototype.opacity = 1;

Bullet.prototype.render = function (ctx) {

    // TODO: Modify this to implement a smooth "fade-out" during
    // the last third of the bullet's total "lifeSpan"

    // NB: You can make things fade by setting `ctx.globalAlpha` to
    // a value between 0 (totally transparent) and 1 (totally opaque).

    var fadeThresh = Bullet.prototype.lifeSpan / 3;


    /*when 1 sec is left we make it fade slightly*/
    if(fadeThresh > this.lifeSpan){
      this.opacity -= 0.020;
      if(this.opacity < 0){
        this.opacity = 0.01;
      }
    }
    ctx.save();
    ctx.globalAlpha = this.opacity;

    g_sprites.bullet.drawWrappedCentredAt(ctx, this.cx , this.cy, this.rotation);
    ctx.restore();

    // ..YOUR STUFF..

};
