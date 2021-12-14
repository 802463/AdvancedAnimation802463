function Particle(x, y, rad, clr, ctxArray, worldWidth, worldHeight){
  this.loc = new JSVector(x, y); //initialize loc at emitter loc
  this.vel = new JSVector(Math.random()*2-1, Math.random()*2-2);
  this.acc = new JSVector(0, 0.05);
  this.life = 120;
  this.rad = rad;
  this.clr = clr;
  this.ctxArray = ctxArray;
   this.worldScale = new JSVector(worldWidth,worldHeight);
}

Particle.prototype.run = function(){
  this.update();
  this.render();
}

Particle.prototype.render = function(){
  for(var i = 0;i<this.ctxArray.length;i++){
    let ctx = this.ctxArray[i];
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;


  ctx.beginPath();
    ctx.save();
     ctx.arc(this.loc.x, this.loc.y, 30, 0, Math.PI * 2, true); // Outer circle
     ctx.moveTo(this.loc.x+15, this.loc.y);
     ctx.arc(this.loc.x, this.loc.y, 15, 0, Math.PI, false);  // Mouth (clockwise)
     ctx.moveTo(this.loc.x-10, this.loc.y-10);
     ctx.arc(this.loc.x-15, this.loc.y-10, 5, 0, Math.PI * 2, true);  // Left eye
     ctx.moveTo(this.loc.x+20, this.loc.y-10);
     ctx.arc(this.loc.x+15, this.loc.y-10, 5, 0, Math.PI * 2, true);  // Right eye


  ctx.closePath();

  ctx.closePath();
  ctx.fillStyle = this.clr;
  ctx.stroke();
  ctx.restore();

  }
}

Particle.prototype.update = function(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.life--;
}

Particle.prototype.isDead = function(){
  if(this.life<0){
    return true;
  }
  else{
    return false;
  }
}
