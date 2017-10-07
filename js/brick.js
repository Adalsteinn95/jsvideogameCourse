var g_wall = new Wall([
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,2,2,2,2,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],

],0,0);


function Wall(object,startX,startY) {
  this.startX = startX;
  this.startY = startY;

  this.spaceX = 100;
  this.spaceY = 20;

  this.brickhalfWidth = 50;
  this.brickhalfHeight = 10;


  var x = startX;
  var y = startY;

  for (var i in object) {
    for (var j in object[i]) {
      object[i][j] = {
        x: x,
        y: y,
        hit: 0,
        halfWidth: this.brickhalfWidth,
        halfHeight: this.brickhalfHeight,
        lives: object[i][j]
      };

      x += this.spaceX;
    }
    this.width = x;
    this.height = y + (this.brickhalfHeight * 2);
    x = startX;
    y += this.spaceY;

  }

  this.bricks = object;
}


Wall.prototype.update = function(du){


}

Wall.prototype.collidesWith = function(prevX, prevY, nextX, nextY, r){

  if(g_ball.yVel > 0){
    var brickX = Math.floor( (nextX - this.startX + this.brickhalfHeight) / this.spaceX);
    var brickY = Math.floor( (nextY - this.startY + this.brickhalfHeight) / this.spaceY);

    var prevX = Math.floor( (prevX - this.startX + this.brickhalfHeight) / this.spaceX);
    var prevY = Math.floor( (prevY - this.startY + this.brickhalfHeight) / this.spaceY);
  } else {
    var brickX = Math.floor( (nextX - this.startX - this.brickhalfHeight) / this.spaceX);
    var brickY = Math.floor( (nextY - this.startY - this.brickhalfHeight) / this.spaceY);

    var prevX = Math.floor( (prevX - this.startX - this.brickhalfHeight) / this.spaceX);
    var prevY = Math.floor( (prevY - this.startY - this.brickhalfHeight) / this.spaceY);
  }




  var index_X = 1;
  var index_Y = 1;

  if(brickX != prevX){
    index_X = true;
  }
  if(brickY != prevY){
    index_Y = true;
  }



  /*try catch in case we check undefined brick */
  try{
          if(this.bricks[brickY][brickX].lives === 0){
            return [index_X,index_Y];
          } else {

            this.bricks[brickY][brickX].lives--;
            if(brickX !== prevX){
              index_X = -1;
            }

            if(brickY !== prevY){
              index_Y = -1;
            }

            return [index_X,index_Y];
          }
  }
  catch(e){
  }
  return [index_X,index_Y];




}

Wall.prototype.render = function(ctx){
  ctx.strokeRect(this.startX,this.startY,this.width,this.height);

  for (var i in this.bricks) {
    for (var j in this.bricks[i]) {

      if(this.bricks[i][j].lives === 2){
        ctx.fillStyle = "purple";
      } else if(this.bricks[i][j].lives === 1){
        ctx.fillStyle = "red";
      }

      if(this.bricks[i][j].lives === 0){
        ctx.fillStyle = "white";
      } else {
        ctx.strokeRect(this.bricks[i][j].x,this.bricks[i][j].y, this.bricks[i][j].halfWidth * 2, this.bricks[i][j].halfHeight * 2);
        ctx.fillRect(this.bricks[i][j].x,this.bricks[i][j].y, this.bricks[i][j].halfWidth * 2, this.bricks[i][j].halfHeight * 2);

      }

    }
  }

  ctx.fillStyle = "black";

}
