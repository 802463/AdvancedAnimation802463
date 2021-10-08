//Greta Hachigian-Kreutzer
//Snake Lab
//1006

// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, ctx;
var snakes = [];


function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    ctx = canvas.getContext("2d");

    //how to make snakes look nice and be snakes
    let numSnakes = 10;
    for(var i = 0; i < numSnakes; i++){
      var x, y, dx, dy, rad, clr, r, g, b, numSegments;
      x = Math.random()*canvas.width;
      y = Math.random()*canvas.height;
      dx = Math.random()*2-1;
      dy = Math.random()*2-1;
      r = Math.random()*255;
      g = Math.random()*255;
      b = Math.random()*255;
      clr = "rgba(" + r + ", "+ g + ","+ b +")"
      numSegments = 15;
      this.snakes.push(new Snake(x, y, dx, dy, clr, numSegments));
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
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    //yay snakes on screen now
    for(let i = 0; i < snakes.length; i++){
          this.snakes[i].run();
        }
    requestAnimationFrame(animate); // next cycle
}
