function World(width, height){

    this.canvas1 = document.getElementById('cnv1');
    this.ctx1 = this.canvas1.getContext('2d');
    this.canvas2 = document.getElementById('cnv2');
    this.ctx2 = this.canvas2.getContext('2d');
    this.dimensions = new JSVector(width,height);

    let ctxArr = [this.ctx1,this.ctx2];


    this.canvas1Loc = new JSVector();

    this.world = {
        top: -1500,
        left: -2000,
        bottom: 1500,
        right: 2000,
        width: 4000,
        height: 3000
    }

    this.snakes = [];
    this.newSnake(10,ctxArr,this.dimensions.x,this.dimensions.y);
    //scale vs world
    this.scaleX = this.canvas2.width/this.world.width;
    this.scaleY = this.canvas2.height/this.world.height;

    // add an event handler such that the a, s, w, d keys
    // will reposition the canvas within the world.
    window.addEventListener("keypress", function(event){
        switch(event.code){
            case "KeyW":
                if(world.canvas1Loc.y+100 > world.world.top)
                    world.canvas1Loc.y -= 20;
                break;
            case "KeyS":
                if(world.canvas1Loc.y + world.canvas1.height -100 < world.world.bottom)
                    world.canvas1Loc.y += 20;
                break;
            case "KeyA":
                if(world.canvas1Loc.x+100 > world.world.left)
                    world.canvas1Loc.x -= 20;
                break;
            case "KeyD":
                if(world.canvas1Loc.x + world.canvas1.width -100 < world.world.right)
                    world.canvas1Loc.x += 20;
                break;
            break;
            }
    }, false);

}//++++++++++++++++++++++++++++++  end world constructor


// function to run the world each animation cycle
World.prototype.run = function(){

  this.ctx1.fillStyle =  'rgba(0, 0, 0, 0.25)';
  this.ctx1.clearRect(0,0,this.canvas1.width,this.canvas1.height);
  this.ctx2.fillStyle =  'rgba(0, 0, 0, 0.25)';
  this.ctx2.clearRect(0,0,this.canvas2.width,this.canvas2.height);

  this.ctx1.save();
  this.ctx1.translate(this.canvas1Loc.x*(-1), this.canvas1Loc.y*(-1));
  this.ctx2.save();
  this.ctx2.scale(this.scaleX, this.scaleY);

  //center canvas2 in world
  this.ctx2.translate(this.world.width/2, this.world.height/2);
  for(let i = 0; i < this.snakes.length; i++){
    this.snakes[i].run();
  }

  this.ctx1.restore();
  this.ctx2.restore();

    // translate canvas1 according to the location of the canvas in the world
    this.ctx1.save();
    this.ctx1.translate(this.canvas1Loc.x*(-1), this.canvas1Loc.y*(-1));

    //bounds of the world in canvas1
    this.ctx1.strokeStyle = "rgba(0, 230, 64, 1)"
    this.ctx1.beginPath();
    this.ctx1.lineWidth = 3;
    this.ctx1.strokeRect(this.world.left, this.world.top, this.world.width, this.world.height);

    //x and y axes in canvas1
    this.ctx1.strokeStyle = "rgba(240, 52, 52, 1)"
    this.ctx1.beginPath();
    this.ctx1.moveTo(0, this.world.top);
    this.ctx1.lineTo(0, this.world.bottom);
    this.ctx1.stroke();
    this.ctx1.moveTo(this.world.left, 0);
    this.ctx1.lineTo(this.world.right, 0);
    this.ctx1.stroke();

    // scale canvas2- contain the entire world
    this.ctx2.save();
    this.ctx2.beginPath();
    this.ctx2.lineWidth = 30;
    this.ctx2.strokeStyle = "rgba(240, 52, 52, 1)"
    this.ctx2.scale(this.scaleX, this.scaleY);

    //center canvas2 in world
    this.ctx2.translate(this.world.width/2, this.world.height/2);

    //outline in canvas2
    this.ctx2.strokeStyle = "rgba(0, 0, 0, 1)"
    this.ctx2.strokeRect(this.canvas1Loc.x, this.canvas1Loc.y, this.canvas1.width, this.canvas1.height);

    //x and y axes
    this.ctx2.strokeStyle = "rgba(240, 52, 52, 1)"
    this.ctx2.moveTo(0, this.world.top);
    this.ctx2.lineTo(0, this.world.bottom);
    this.ctx2.stroke();
    this.ctx2.moveTo(this.world.left, 0);
    this.ctx2.lineTo(this.world.right, 0);
    this.ctx2.stroke();

    this.ctx1.restore();
    this.ctx2.restore();
}

World.prototype.newSnake = function(numSnakes,ctxArr,worldWidth,worldHeight){
for(var i = 0; i < numSnakes; i++){
  var x, y, dx, dy, rad, clr, r, g, b, numSegments;
  rad = 10;
  x = Math.random()*(worldWidth-2*rad)+rad-worldWidth/2;
  y = Math.random()*(worldHeight-2*rad)+rad-worldHeight/2;
  dx = Math.random()*3-1;
  dy = Math.random()*3-1;
  r = Math.random()*255;
  g = Math.random()*255;
  b = Math.random()*255;
  clr = "rgba(" + r + ", "+ g + ","+ b +")";
  numSegments = 15;

  this.snakes.push(new Snake(x, y, dx, dy, clr, ctxArr,numSegments,worldWidth,worldHeight));
  }
}
