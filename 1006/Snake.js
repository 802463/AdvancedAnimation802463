function Snake(x, y, dx, dy, clr, numSegments){
  this.head = new Head(x, y, dx, dy, 10, clr);
  this.clr = clr;
  this.segments = [];
  this.numSegments = numSegments;

  //create segments w/ pos when spawning
  let d = 20;
  for(let i = 0;i < this.numSegments;i++){
    this.segments[i] = new JSVector(x - d, y - d);
    d = d - 20;
  }
}

Snake.prototype.run = function(){
    this.head.run();
    this.update();
    this.render();
}


Snake.prototype.render = function(){
    for(var i = 0; i < this.numSegments; i++){
      ctx.strokeStyle = this.clr;
      ctx.beginPath();
      ctx.arc(this.segments[i].x, this.segments[i].y, 5, Math.PI*2, 0, false);
      ctx.stroke();
      ctx.fillStyle = this.clr;
      ctx.fill();
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
