function Ball(loc, vel, acc,clr,radius) {
  //variables
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.clr = clr;
  this.radius = radius;
}//++++++++++++++++++++++++++++++++ end ball constructor

//++++++++++++++++++++++++++++++++ methods
  Ball.prototype.update = function(){
          this.vel.add(this.acc);
          this.loc.add(this.vel);
  }

  Ball.prototype.checkEdges = function(){
  if(this.loc.x > canvas.width) this.loc.x = 0;
  if(this.loc.y > canvas.height) this.loc.y = 0;
  if(this.loc.x < 0) this.loc.x = canvas.width;
  if(this.loc.y < 0) this.loc.y = canvas.height;
  }

  Ball.prototype.draw = function(){
    context.beginPath();
    context.fillStyle = this.clr;
    context.arc(this.loc.x, this.loc.y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }

  Ball.prototype.attract1 = function(v2){
  var d = this.loc.distance(v2.loc);
  if(d<175){
    var attractor = JSVector.subGetNew(v2.loc, this.loc);
    attractor.normalize();
    attractor.multiply(0.05);
    this.acc.add(attractor);
  }
}

Ball.prototype.attract2 = function(v2){
  var d = this.loc.distance(v2.loc);
  if(d<175){
    var attractor = JSVector.subGetNew(this.loc, v2.loc);
    attractor.normalize();
    attractor.multiply(0.05);
    this.acc.add(attractor);
  }
}
