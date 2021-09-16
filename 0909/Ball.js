function Ball(x, y, dx, dy, rad, clr, ctx) {
  //variables
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(dx,dy);
  this.clr = clr;
  this.rad = rad;
  this.dylan= new JSVector(0, 0);
  this.context = ctx;
}//++++++++++++++++++++++++++++++++ end ball constructor

//++++++++++++++++++++++++++++++++ methods
  Ball.prototype.update = function(){
  if(this !== balls[0]){
      let d = this.loc.distance(balls[0].loc);

    if(d<200){//+++++++++++++++++++++ repell
          this.dylan = JSVector.subGetNew(this.loc, balls[0].loc);
          this.dylan.setMagnitude(0.1);
    }

    if(d>100){//+++++++++++++++++++++ attract
        this.dylan = JSVector.subGetNew(balls[0].loc, this.loc);
        this.dylan.setMagnitude(0.1);
    }
  }

      if(this !== balls[0]){
        this.vel.add(this.dylan);
        this.vel.limit(3);
        this.loc.add(this.vel);
    }

    this.loc.add(this.vel);
  }

  Ball.prototype.checkEdges = function(){
  if(this.loc.x > canvas.width) this.loc.x = 0;
  if(this.loc.y > canvas.height) this.loc.y = 0;
  if(this.loc.x < 0) this.loc.x = canvas.width;
  if(this.loc.y < 0) this.loc.y = canvas.height;
  }

  Ball.prototype.draw = function(){
    this.context.beginPath();
    this.context.fillStyle = this.clr;
    this.context.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI);
    this.context.fill();
  }
