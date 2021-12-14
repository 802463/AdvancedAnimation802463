function ParticleSys(x, y, ctxArray, worldWidth, worldHeight){
  this.particles = [];
  this.eloc = new JSVector(x, y);//emitter loc
  this.ctxArray = ctxArray;
   this.worldScale = new JSVector(worldWidth,worldHeight);
}

ParticleSys.prototype.run = function(){
  this.addParticle();
  this.update();
}

ParticleSys.prototype.addParticle = function(){
  let r = Math.random()*80;
  let g = Math.random()*200;
  let b = Math.random()*255;
  let clr = "rgba(" + r + ", "+ g + ","+ b +")"
  this.particles.push(new Particle(this.eloc.x, this.eloc.y, 5, clr, this.ctxArray, this.worldWidth, this.worldHeight));
}

ParticleSys.prototype.update = function(){
  for(var i = this.particles.length-1;i>=0;i--){
    let p = this.particles[i];
    p.run();
    if(p.isDead()){
      this.particles.splice(i, 1);
    }
  }
}
