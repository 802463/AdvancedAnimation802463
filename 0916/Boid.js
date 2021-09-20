function Boid(x, y, dx, dy, rad, clr, ctx) {
  //variables
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(dx,dy);
  this.clr = clr;
  this.rad = rad;
  this.acc= new JSVector(0, 0);
  this.context = ctx;
}//++++++++++++++++++++++++++++++++ end ball constructor

//++++++++++++++++++++++++++++++++ methods
  Boid.prototype.update = function(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  Boid.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width || this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.y > canvas.height || this.loc.y < 0) this.vel.y =-this.vel.y;
  }

  Boid.prototype.draw = function(){
    this.context.beginPath();
    this.context.strokeStyle = this.clr;

    this.context.moveTo(this.loc.x+this.rad,this.loc.y);
    this.context.lineTo(this.loc.x-this.rad,this.loc.y-this.rad/2);
    this.context.lineTo(this.loc.x-this.rad,this.loc.y+this.rad/2);
    this.context.closePath();
    this.context.stroke();

  }
