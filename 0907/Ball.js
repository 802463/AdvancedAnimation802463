function Ball(loc, vel, clr,radius) {
  //variables
  this.loc = loc;
  this.vel = vel;
  //this.acc = new Vector(0,0.1);
  this.clr = clr;
  this.radius = radius;
}//++++++++++++++++++++++++++++++++ end ball constructor

//++++++++++++++++++++++++++++++++ methods
  Ball.prototype.update = function(){
    this.loc.add(this.vel);
    //add acceleration
    //this.vel.add(this.acc);
  }

  Ball.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width || this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.y > canvas.height || this.loc.y < 0) this.vel.y =-this.vel.y;
  }

  Ball.prototype.draw = function(){
    context.beginPath();
    context.fillStyle = this.clr;
    context.arc(this.loc.x, this.loc.y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }
