//Greta Hachigian-Kreutzer
//0823

// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context;
var balls=[];

function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");


    let numBalls = 100;
       for(var i = 0; i < numBalls; i++){
           var x, y, dx, dy, rad, clr, r, g, b;
           x = this.canvas.width/2;
           y = this.canvas.height/2;
           dx = Math.random()*6-3;
           dy = Math.random()*6-3;
           rad = 10;
           r = 0
           g = 255;
           b = 255;
           clr = "rgba(" + r + ", "+ g + ","+ b +")"
           let ball = new Ball(x, y, dx, dy, rad, clr);
           balls.push(ball);
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
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillStyle = 'rgba(0, 0, 0, 0.25)';
    for(i = 0; i<balls.length; i++){
      balls[i].update();
      balls[i].draw();
      balls[i].checkEdges();
    }

    requestAnimationFrame(animate); // next cycle
}
