//Greta Hachigian-Kreutzer
//0819
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context;
var ball1={};
var ball2={};

function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");

    ball1.x = ball1.y = 100;    // initial x,y canvas location
    ball1.dx = ball1.dy = 4.5;   // velocity in x and y directions
    ball1.radius = 15;

    ball1.run = function(){
      this.update();
      this.checkEdges();
      this.draw();
    }

    ball1.update = function(){
      this.x+=this.dx;
      this.y+=this.dy;
    }

    ball1.checkEdges = function(){
      if(this.x > canvas.width || this.x < 0) this.dx = -this.dx;
      if(this.y > canvas.height || this.y < 0)this.dy =-this.dy;
    }

    ball1.draw = function(){
      // create the circle path
      context.beginPath();    // clear old path
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.strokeStyle = "black";  // color to fill
      context.fillStyle = "blue";     // color to stroke
      context.fill();     // render the fill
      context.stroke();   // render the stroke
    }

    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //ball2

    ball2.x = 300;    // initial y canvas location
    ball2.y = 200;    // initial y canvas location
    ball2.dx = 3;     // velocity in x directions
    ball2.dy = 5.5;   // velocity in y directions
    ball2.radius = 20;

    ball2.run = function(){
      this.update();
      this.checkEdges();
      this.draw();
    }

    ball2.update = function(){
      this.x+=this.dx;
      this.y+=this.dy;
    }

    ball2.checkEdges = function(){
      if(this.x > canvas.width || this.x < 0) this.dx = -this.dx;
      if(this.y > canvas.height || this.y < 0)this.dy =-this.dy;
    }

    ball2.draw = function(){
      // create the circle path
      context.beginPath();    // clear old path
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.strokeStyle = "black";  // color to fill
      context.fillStyle = "red";     // color to stroke
      context.fill();     // render the fill
      context.stroke();   // render the stroke
    }
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    ball1.run();
    ball2.run();
    requestAnimationFrame(animate); // next cycle
}
