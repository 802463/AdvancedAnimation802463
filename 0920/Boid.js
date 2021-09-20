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


    this.context.save();
    this.context.translate(this.loc.x,this.loc.y);
    this.context.rotate(this.vel.getDirection());
    this.context.moveTo(this.rad,0);
    this.context.lineTo(-this.rad,-this.rad/2);
    this.context.lineTo(-this.rad,this.rad/2);
    this.context.closePath();

    this.context.closePath();
    this.context.stroke();
    this.context.restore();
  }
