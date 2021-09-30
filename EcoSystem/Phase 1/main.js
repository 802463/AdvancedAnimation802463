//Greta Hachigian-Kreutzer
//Ecosystem Phase 1
//0929

// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context;
var movers = [];


function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");

    let numMovers = 10;
    for(var i = 0; i<numMovers;i++){
      var x, y, dx, dy, rad, clr, r, g, b, numOrbiters;
      rad = 7;
      x = random(0,canvas.width);
      y = random(0,canvas.height);
      dx = Math.random()*2-1;
      dy = Math.random()*2-1;
      r = Math.random()*20;
      g = Math.random()*155;
      b = Math.random()*155;
      clr = "rgba(" + r + ", "+ g + ","+ b +")"
      numOrbiters = Math.floor(Math.random() * 8) + 3;
      this.movers.push(new Mover(x, y, dx, dy, rad, clr, numOrbiters, context));
    }

      animate();
}



function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.fillStyle = 'rgba(0, 0, 0, 0.25)';
    context.clearRect(0,0,canvas.width,canvas.height);

       for(let i = 0; i < this.movers.length; i++){
         this.movers[i].run();
       }

    requestAnimationFrame(animate); // next cycle
}
