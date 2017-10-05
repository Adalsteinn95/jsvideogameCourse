var g_wall = new Wall([
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,2,1,1,1,1,2,1],
  [1,2,1,1,1,1,2,1],
  [1,2,2,2,2,2,2,1],
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

  var brickX = Math.floor( (prevX - this.brickhalfHeight) / this.spaceX);
  var brickY = Math.floor( (prevY - this.brickhalfHeight) / this.spaceY);


  var nextbrickX = Math.floor( (prevX - this.brickhalfHeight) / this.spaceX);
  var nextbrickY = Math.floor( (prevY - this.brickhalfHeight) / this.spaceY);



  /*try catch in case we check undefined brick */
  try{
          if(this.bricks[brickY][brickX].lives === 0){
            return false
          } else {
            this.bricks[brickY][brickX].lives = this.bricks[brickY][brickX].lives - 1;
            return true;
          }
  }
  catch(e){
  }





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

      } else {
        ctx.strokeRect(this.bricks[i][j].x,this.bricks[i][j].y, this.bricks[i][j].halfWidth * 2, this.bricks[i][j].halfHeight * 2);
        ctx.fillRect(this.bricks[i][j].x,this.bricks[i][j].y, this.bricks[i][j].halfWidth * 2, this.bricks[i][j].halfHeight * 2);

      }

    }
  }

  ctx.fillStyle = "black";

}
