//Greta Hachigian-Kreutzer
//0909

// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context;
var boids=[];

function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");


    let numBoids = 100;
       for(var i = 0; i < numBoids; i++){
           var x, y, dx, dy, rad, clr, r, g, b;
           x = this.canvas.width/2;
           y = this.canvas.height/2;
           dx = Math.random()*6-3;
           dy = Math.random()*6-3;
           rad = 10;
           r = 86;;
           g = 15;
           b = 170;
           clr = "rgba(" + r + ", "+ g + ","+ b +")"
           let boid = new Boid(x, y, dx, dy, rad, clr, context);
           boids.push(boid);
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
    context.fillRect(0,0,canvas.width,canvas.height);

    for(i = 0; i<boids.length; i++){
      boids[i].checkEdges();
      boids[i].update();
      boids[i].draw();
    }

    requestAnimationFrame(animate); // next cycle
}
