function Planet(x, y, rad, clr, ctx) {
  //variables
  this.loc = new JSVector(x,y);
  this.clr = clr;
  this.rad = rad;
  this.context = ctx;
}//++++++++++++++++++++++++++++++++ end ball constructor

//++++++++++++++++++++++++++++++++ methods
  Planet.prototype.update = function(){
    let d = this.loc.distance(boids[0].loc);
    if(d<90){//new loc
      this.loc = new JSVector(random(10,canvas.width),random(10,canvas.height));
    }
  }

  Planet.prototype.draw = function(){
    this.context.beginPath();
    this.context.fillStyle = this.clr;
    this.context.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI);
    this.context.fill();
  }
