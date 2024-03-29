
/*global wall*/
var g_wall = new Wall([
  [1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0],
  [0,2,2,2,2,2,2,0],
  [0,0,3,0,0,3,0,0],
  [0,0,3,0,0,3,0,0],
  [0,2,2,2,2,2,2,0],
  [0,0,3,0,0,3,0,0],
  [0,0,3,0,0,3,0,0],
  [0,2,2,2,2,2,2,0],
  [0,0,3,0,0,3,0,0],
  [0,0,3,0,0,3,0,0],
  [0,2,2,2,2,2,2,0],
  [0,0,3,0,0,3,0,0],
  [0,0,3,0,0,3,0,0],
  [0,2,2,2,2,2,2,0],
  [0,0,0,3,0,0,0,0],
  [1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],

],0,0);

/*constructor for wall*/
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

/*collusion for wall*/
Wall.prototype.collidesWith = function(prevX, prevY, nextX, nextY, r){


 /*set the collusion based if the ball is going down or op*/
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
            /*HIT*/
            /*sound 4 hit*/
            var sound = new Audio();

            sound = document.getElementById('hit');
            sound.loop = false;
            sound.currentTime = 0;
            sound.play();

            this.bricks[brickY][brickX].lives--;

            /*collusion on left or right side of the brick*/
            if(brickX !== prevX){
              index_X = -1;
            }

            if(brickY !== prevY){
              index_Y = -1;
            }
            /*random generateor for powerups 20% changes to get one */
            var randomBrick = Math.floor((Math.random() * 5) + 1);

            /*random gengerator for powers*/
            var randomPower = Math.floor(Math.random() * 5);
            var powers = ['getbigger','getsmaller','anotherball','speedUp','speedDown'];


            if(randomBrick===1){
              /*new powerup*/
              var g_powerup = new Powerup({
                x: this.bricks[brickY][brickX].x + 40,
                y: this.bricks[brickY][brickX].y,
                balls: false,
                gravity: 5,
                r: 5,

                /*check if we should render */
                check: true,
                power: powers[randomPower],
              });

              g_powerups.push(g_powerup);
            }

            return [index_X,index_Y];
          }
  }
  catch(e){
  }
  return [index_X,index_Y];




}

Wall.prototype.render = function(ctx){

  for (var i in this.bricks) {
    for (var j in this.bricks[i]) {

      if(this.bricks[i][j].lives === 3){
        ctx.fillStyle = "#D79922";
      }else if(this.bricks[i][j].lives === 2){
        ctx.fillStyle = "#F13C20";
      } else if(this.bricks[i][j].lives === 1){
        ctx.fillStyle = "#4056A1";
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
