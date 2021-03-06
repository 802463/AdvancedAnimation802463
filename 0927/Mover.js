function Mover(x, y, dx, dy, rad, clr, numOrbiters, ctx) {
  //variables
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(dx,dy);
  this.clr = clr;
  this.rad = rad;
  this.acc= new JSVector(0, 0);
  this.context = ctx;
  this.orbiterAngle = Math.random()*Math.PI;
  this.orbiters = [];


  for(let i = 0; i<numOrbiters; i++){
     let a = i*(Math.PI*2)/numOrbiters + this.orbiterAngle;
     let angleVel = numOrbiters*0.01;
     this.orbiters.push(new Orbiter(this, 3, 25, a, angleVel, this.clr,context));
   }

}//++++++++++++++++++++++++++++++++ end mover constructor

//++++++++++++++++++++++++++++++++ methods

  Mover.prototype.run = function(){
    this.update();
    this.checkEdges();
    this.draw();

    for(let i = 0; i < this.orbiters.length; i++){
      let orb = this.orbiters[i];
      orb.update();
      orb.draw();
    }
  }

  Mover.prototype.update = function(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.vel.limit(3);
  }


  Mover.prototype.checkEdges = function(){
    if(this.loc.x > canvas.width) this.loc.x = 0;
    if(this.loc.y > canvas.height) this.loc.y = 0;
    if(this.loc.x < 0) this.loc.x = canvas.width;
    if(this.loc.y < 0) this.loc.y = canvas.height;
  }


  Mover.prototype.draw = function(){
    this.context.beginPath();
    this.context.fillStyle = this.clr;
    this.context.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI, false);
    this.context.fill();
  }
