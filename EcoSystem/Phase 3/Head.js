function Head(x, y, dx, dy, rad, clr){

  this.loc = new JSVector(x, y);
  this.vel = new JSVector(dx, dy);
  this.acc= new JSVector(0, 0);
  this.rad = rad;
  this.clr = clr;
}

Head.prototype.run = function(){
    this.checkEdges();
    this.update();
}

Head.prototype.update = function(){
      this.loc.add(this.vel);
      this.vel.add(this.acc);
      for(let i = 0; i < world.movers.length; i++){
      let d = this.loc.distance(world.movers[i].loc);

      if(d<70){
              this.acc = JSVector.subGetNew(world.movers[i].loc, this.loc);
              this.acc.setMagnitude(0.1);
      }

          this.acc.limit(0.1);
}
      this.acc.limit(3);
      this.vel.limit(3.8);
}

Head.prototype.checkEdges = function(){
    if (this.loc.x >= world.dimensions.x/2|| this.loc.x <= -world.dimensions.x/2){
        this.vel.x*=-1;
    }
    if (this.loc.y >= world.dimensions.y/2 || this.loc.y < -world.dimensions.y/2){
        this.vel.y*=-1;
    }
  }
