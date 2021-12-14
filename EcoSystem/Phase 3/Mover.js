function Mover(x, y, dx, dy, rad, clr, numOrbiters, ctxArray, worldWidth, worldHeight) {
  //variables
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(dx,dy);
  this.clr = clr;
  this.rad = rad;
  this.acc= new JSVector(0, 0);
  this.orbiterAngle = Math.random()*Math.PI;
  this.orbiters = [];
  this.ctxArray = ctxArray;
  this.worldScale = new JSVector(worldWidth,worldHeight);

   for(var i = 0;i<this.ctxArray.length;i++){
   let ctx = this.ctxArray[i];
   for(let i = 0; i<numOrbiters; i++){
     let a = i*(Math.PI*2)/numOrbiters + this.orbiterAngle;
     let angleVel = numOrbiters*0.01;
     this.orbiters.push(new Orbiter(this, 3, 25, a, angleVel, this.clr, this.ctxArray, worldWidth,worldHeight));
   }
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

    this.vel.limit(3.8);


    //++++++++ change color when overlapping w psys
     for(let i = 0; i < world.psystem.length; i++){
       let d = this.loc.distance(world.psystem[i].eloc);
        if(d<200){
             this.clr = "red";
             for(var k = 0;k<this.orbiters.length;k++){
               this.orbiters[k].clr = "red";
             }
           }
     }
    //++++++++++++++++++++++++++++++++++++++++++++

    this.acc.limit(3);
  }


  Mover.prototype.checkEdges = function(){
    if (this.loc.x >= world.dimensions.x/2|| this.loc.x <= -world.dimensions.x/2){
        this.vel.x*=-1;
    }
    if (this.loc.y >= world.dimensions.y/2 || this.loc.y < -world.dimensions.y/2){
        this.vel.y*=-1;
    }
  }


  Mover.prototype.draw = function(){
    for(var i = 0;i<this.ctxArray.length;i++){
      let ctx = this.ctxArray[i];
      ctx.beginPath();
      ctx.fillStyle = this.clr;
      ctx.arc(this.loc.x, this.loc.y, this.rad, 0, 2 * Math.PI, false);
      ctx.fill();
  }
}
