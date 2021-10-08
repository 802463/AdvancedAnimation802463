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
    if (this.loc.x > canvas.width || this.loc.x < 0){
        this.vel.x = -this.vel.x;
    }
    if (this.loc.y > canvas.height || this.loc.y < 0){
        this.vel.y = -this.vel.y;
    }
  }
