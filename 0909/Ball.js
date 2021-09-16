function Ball(x, y, dx, dy, rad, clr) {
  //variables
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(dx,dy);
  this.clr = clr;
  this.rad = rad;
  this.pulser= new JSVector(0, 0);
}//++++++++++++++++++++++++++++++++ end ball constructor

//++++++++++++++++++++++++++++++++ methods
  Ball.prototype.update = function(){
  if(this !== balls[0]){
      let d = this.loc.distance(balls[0].loc);

    if(d<200){//+++++++++++++++++++++ repell
          this.pulser = JSVector.subGetNew(this.loc, balls[0].loc);
          this.pulser.normalize();
          this.pulser.multiply(0.1);
    }

    if(d>100){//+++++++++++++++++++++ attract
        this.pulser = JSVector.subGetNew(balls[0].loc, this.loc);
        this.pulser.normalize();
        this.pulser.multiply(0.1);
    }
  }

      if(this !== balls[0]){
        this.vel.add(this.pulser);
        this.vel.limit(3);
        this.loc.add(this.vel);
    }
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
    context.stroke();
    context.fill();
  }
