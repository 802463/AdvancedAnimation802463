function Head(x, y, dx, dy, rad, clr){

  this.loc = new JSVector(x, y);
  this.vel = new JSVector(dx, dy);
  this.rad = rad;
  this.clr = clr;
}

Head.prototype.run = function(){
    this.checkEdges();
    this.update();
}

Head.prototype.update = function(){
      this.loc.add(this.vel);
}

Head.prototype.checkEdges = function(){
    if (this.loc.x >= world.dimensions.x/2|| this.loc.x <= -world.dimensions.x/2){
        this.vel.x*=-1;
    }
    if (this.loc.y >= world.dimensions.y/2 || this.loc.y < -world.dimensions.y/2){
        this.vel.y*=-1;
    }
  }
