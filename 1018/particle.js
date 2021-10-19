function Particle(x, y, rad, clr){
  this.loc = new JSVector(x, y); //initialize loc at emitter loc
  this.vel = new JSVector(Math.random()*2-1, Math.random()*2-2);
  this.acc = new JSVector(0, 0.05);
  this.life = 120;
  this.rad = rad;
  this.clr = clr;
}

Particle.prototype.run = function(){
  this.update();
  this.render();
}

Particle.prototype.render = function(){
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y, this.rad, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
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
