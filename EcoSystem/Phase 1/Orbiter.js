function Orbiter(mover, oRad, oRad, angle, angleVel, clr, ctx) {
  //variables
  this.clr = clr;
  this.rad = oRad;
  this.context = ctx;
  this.mover = mover;
  this.rotator = new JSVector(oRad, 0);
  this.rotator.setDirection(angle);
  this.loc = JSVector.addGetNew(this.mover.loc, this.rotator);
  this.angleVel = angleVel;
}//++++++++++++++++++++++++++++++++ end orbit constructor

//++++++++++++++++++++++++++++++++ methods
  Orbiter.prototype.update = function(){
    //makes the orbiters orbit yk?
    this.rotator.rotate(this.angleVel);
    this.loc = JSVector.addGetNew(this.mover.loc, this.rotator);
    }

  Orbiter.prototype.draw = function(){
    this.context.strokeStyle = this.clr;
    this.context.lineWidth = 1;
    this.context.beginPath();
    this.context.arc(this.loc.x, this.loc.y, this.rad, Math.PI*2, 0, false);
    this.context.stroke();

    this.context.lineWidth = 1;
    this.context.beginPath();
    this.context.moveTo(this.mover.loc.x, this.mover.loc.y);
    this.context.lineTo(this.loc.x, this.loc.y);
    this.context.stroke();
  }
