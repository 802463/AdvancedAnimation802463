function Ball(x, y, dx, dy, clr,radius) {
  //variables
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.clr = clr;
  this.radius = radius;

//methods
  Ball.prototype.update = function(){
    this.x+=this.dx;
    this.y+=this.dy;
  }

  Ball.prototype.checkEdges = function(){
    if(this.x > canvas.width || this.x < 0) this.dx = -this.dx;
    if(this.y > canvas.height || this.y < 0)this.dy =-this.dy;
  }

  Ball.prototype.draw = function(){
    context.beginPath();
    context.fillStyle = this.clr;
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }

}//++++++++++++++++++++++++++++++++ end ball constructor
