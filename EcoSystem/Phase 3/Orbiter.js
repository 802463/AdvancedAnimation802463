function Orbiter(mover, oRad, oRad, angle, angleVel, clr, ctxArray, worldWidth, worldHeight) {
  //variables
  this.clr = clr;
  this.rad = oRad;
  this.mover = mover;
  this.rotator = new JSVector(oRad, 0);
  this.rotator.setDirection(angle);
  this.loc = JSVector.addGetNew(this.mover.loc, this.rotator);
  this.angleVel = angleVel;
  this.ctxArray = ctxArray;
   this.worldScale = new JSVector(worldWidth,worldHeight);
}//++++++++++++++++++++++++++++++++ end orbit constructor

//++++++++++++++++++++++++++++++++ methods
  Orbiter.prototype.update = function(){
    this.rotator.rotate(this.angleVel);
    this.loc = JSVector.addGetNew(this.mover.loc, this.rotator);
    }

  Orbiter.prototype.draw = function(){
    for(var i = 0;i<this.ctxArray.length;i++){
      let ctx = this.ctxArray[i];
      ctx.strokeStyle = this.clr;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(this.loc.x, this.loc.y, this.rad, Math.PI*2, 0, false);
      ctx.stroke();

      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(this.mover.loc.x, this.mover.loc.y);
      ctx.lineTo(this.loc.x, this.loc.y);
      ctx.stroke();
  }
}
