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
  this.movers = [];


  for(let i = 0; i<numOrbiters; i++){
     let a = i*(Math.PI*2)/numOrbiters + this.orbiterAngle;
     let angleVel = numOrbiters*0.01;
     this.orbiters.push(new Orbiter(this, 3, 15, a, angleVel, this.clr,context));
   }

}//++++++++++++++++++++++++++++++++ end mover constructor

//++++++++++++++++++++++++++++++++ methods

  Mover.prototype.run = function(){
    //run all the things
    this.update();
    this.checkEdges();
    this.draw();
    this.checkOverlapping();

    //yay orbiters are on the screen now
    for(let i = 0; i < this.orbiters.length; i++){
      let orb = this.orbiters[i];
      orb.update();
      orb.draw();
    }
  }

  Mover.prototype.update = function(){
    //make it go quick n stuff
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    //speed too quick- not anymore :))
    this.vel.limit(3);
  }

  Mover.prototype.checkEdges = function(){
    //if mover reaches canvas edge appears on opposite side
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


  //if movers overlap change color to red + more orbiters/maybe new mover?
  Mover.prototype.checkOverlapping = function(){
      for(var i = 0; i < movers.length; i++){
        for(var j = 0; j < movers.length; j++){
            if(movers[i].loc.distance(movers[j].loc) < 10){
              movers[i].clr = "red";
            }
        }
      }
    }
