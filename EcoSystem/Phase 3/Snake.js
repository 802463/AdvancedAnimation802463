function Snake(x, y, dx, dy, clr, ctxArray, numSegments, worldWidth, worldHeight){
  this.head = new Head(x, y, dx, dy, 10, clr);
  this.clr = clr;
  this.segments = [];
  this.numSegments = numSegments;
  this.ctxArray = ctxArray;
   this.worldScale = new JSVector(worldWidth,worldHeight);

 //create segments w/ pos when spawning
  let d = 25;
  for(let i = 0;i < this.numSegments;i++){
    this.segments[i] = new JSVector(x - d, y - d);
    d = d - 25;
  }
}

Snake.prototype.run = function(){
    this.head.run();
    this.update();
    this.render();
}


Snake.prototype.render = function(){
  for(var i = 0;i<this.ctxArray.length;i++){
    let ctx = this.ctxArray[i];
    for(var k = 0; k < this.numSegments; k++){
      ctx.strokeStyle = this.clr;
      ctx.beginPath();
      ctx.arc(this.segments[k].x, this.segments[k].y, 8, Math.PI*2, 0, false);
      ctx.stroke();
      ctx.fillStyle = this.clr;
      ctx.fill();
    }
  }
}


Snake.prototype.update = function(){
  //make segments follow eachother
      for(let i = 0; i<this.numSegments; i++){
        if(i==0){
          this.segments[i] = new JSVector(this.head.loc.x, this.head.loc.y);
        }
        else{
          let v2 = JSVector.subGetNew(this.segments[i], this.segments[i-1]);
          v2.setMagnitude(this.segments.length);
          this.segments[i] = JSVector.addGetNew(this.segments[i-1], v2);
        }
       }
}
