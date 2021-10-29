function Bird(loc){
  this.loc = new JSVector(loc.x, loc.y);
  let dx = Math.random()*4-2;
  let dy = Math.random()*4-2;
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0,0);
  this.desiredSep = 20; //separation b/t birds
  this.nDist = 60;//distance of neighboring bird
  let r = Math.random()*10;
  let g = Math.random()*80;
  let b = Math.random()*150;
  this.clr = "rgba(" + r + ", "+ g + ","+ b +")"
  this.maxSpeed = 2;
  this.maxForce = 1.5;
}

Bird.prototype.run = function(birds){
  this.flock(birds);
  this.update();
  this.checkEdges();
  this.render();
}

Bird.prototype.render = function(){
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;

  ctx.save();
  ctx.beginPath();
  ctx.translate(this.loc.x, this.loc.y);
  ctx.rotate(this.vel.getDirection()-Math.PI/2);
  ctx.moveTo(-5, -15);
  ctx.lineTo(5, -15);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

}

Bird.prototype.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(2.2);
    this.loc.add(this.vel);
}

Bird.prototype.checkEdges = function(){
  if (this.loc.x > canvas.width){
    this.loc.x = 0;
  }
  else if(this.loc.x < 0){
    this.loc.x = canvas.width;
  }
  if (this.loc.y > canvas.height){
    this.loc.y = 0;
  }
  else if(this.loc.y < 0){
    this.loc.y = canvas.height;
  }
  }

Bird.prototype.flock = function(birds){
  //flock force = accumulation of all forces
  let flockForce = new JSVector(0, 0);
  //set up force vectors to be added to acc
  let sep = this.separate(birds);
  let ali = this.align(birds);
  let coh = this.cohesion(birds);
  //add sliders to manipulate below
  let sepMult = 0.1;
  let aliMult = 0.20;
  let cohMult = 0.08;
  //calc 3 forces
  sep.multiply(sepMult);
  ali.multiply(aliMult);
  coh.multiply(cohMult);
  //add forces to flockForce
  flockForce.add(sep);
  flockForce.add(ali);
  flockForce.add(coh);
  let maxForce = 1
  flockForce.limit(maxForce);
  this.acc.add(flockForce);
}

Bird.prototype.separate = function(birds){
  let sepForce = new JSVector(0,0);
  for(var i=0; i<birds.length;i++){
    let diff = JSVector.subGetNew(this.loc, birds[i].loc);
    let d = diff.getMagnitude();
    if((d>0) && (d<this.desiredSep)){
        diff.normalize();
        sepForce.add(diff);
    }
  }
  return sepForce;
}

Bird.prototype.align = function(birds){
  let sum = new JSVector(0,0);
  let count = 0;
  for(var i=0; i<birds.length;i++){
    let d = this.loc.distance(birds[i].loc);
    if((d>0) && (d<this.nDist)){
      sum.add(birds[i].vel);
      count++;//keep track of number of birds within distance
    }
  }
  if(count>0){
    sum.setMagnitude(3);
    let steer = JSVector.subGetNew(sum,this.vel);
    steer.limit(1.5);//maxForce
    return steer;
  }
  else{
    return new JSVector(0,0);
  }
}

Bird.prototype.cohesion = function(birds){
  let sum = new JSVector(0,0);
  let count = 0;
  for(var i=0; i<birds.length;i++){
    let d = this.loc.distance(birds[i].loc);
    if((d>0) && (d<this.nDist)){
      sum.add(birds[i].loc);
      count++;//keep track of number of birds within distance
    }
  }
  if(count>0){
    sum.divide(count);
    return this.seek(sum);
  }
  else{
    return new JSVector(0,0);
  }
}

Bird.prototype.seek = function(target){
  let desired = JSVector.subGetNew(target,this.loc);
  desired.normalize();
  desired.multiply(2);
  let steer = JSVector.subGetNew(desired,this.vel);
  steer.limit(0.2);
  // let mag = this.vel.getMagnitude();
  // this.vel.add(desired);
  // this.vel.setMagnitude(mag);
  return steer;
}
