//Greta Hachigian-Kreutzer
//0819
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

    for(i = 0; i <100; i++){
      var ball = {};
      //variables
      balls.x = Math.random()*canvas.width;
      balls.y = Math.random()*canvas.height;
      balls.dx = Math.random(2);
      balls.dy = Math.random(3);
      //methods
      balls.run = function(){
        this.update();
        this.checkEdges();
        this.draw();
      }

      balls.update = function(){
        this.x+=this.dx;
        this.y+=this.dy;
      }

      balls.checkEdges = function(){
        if(this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if(this.y > canvas.height || this.y < 0)this.dy =-this.dy;
      }

      balls.draw = function(){
        // create the circle path
        context.beginPath();    // clear old path
        // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.strokeStyle = "black";  // color to fill
        context.fillStyle = "blue";     // color to stroke
        context.fill();     // render the fill
        context.stroke();   // render the stroke
      }
    }
  }


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    for(i = 0; i<balls.length; i++){
      balls[i].run();
    }
    requestAnimationFrame(animate); // next cycle
}
