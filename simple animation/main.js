//Greta Hachigian-Kreutzer
//813
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context, x, y, dx, dy,x2,y2,x3,y3,x4,y4,x5,y5,dx2,dy2,dx3,dy3,dx4,dy4,dx5,dy5;

function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");

    x = y = 100;    // initial x,y canvas location
    x2=y2=Math.random(0,250);
    x3=y3=Math.random(0,300);
    x4=y4=Math.random(0,400);
    x5=y5=Math.random(0,450);

    dx = dy = 6.5;   // velocity in x and y directions
    dx2=dy2=6;
    dx3=dy3=3;
    dx4=dy4=4;
    dx5=dy5=5;

    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    update();   // update location
    checkEdges();
    draw1();     // render
    draw2();
    draw3();
    draw4();
    draw5();
    requestAnimationFrame(animate); // next cycle
}

// move the circle to a new location
function update() {
    x += dx;    // update x coordinate of location with x velocity
    y += dy;    // update y coordinate of location with y velocity
    //ball2
    x2 += dx2;    // update x coordinate of location with x velocity
    y2 += dy2;    // update y coordinate of location with y velocity
    //ball3
    x3 += dx3;    // update x coordinate of location with x velocity
    y3 += dy3;    // update y coordinate of location with y velocity
    //ball4
    x4 += dx4;    // update x coordinate of location with x velocity
    y4 += dy4;    // update y coordinate of location with y velocity
    //ball5
    x5 += dx5;    // update x coordinate of location with x velocity
    y5 += dy5;    // update y coordinate of location with y velocity
}

// render a circle
function draw1() {
    let radius = 15; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "blue";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}

function draw2() {
    context.beginPath();    // clear old path
    context.ellipse(x2,y2,15,15,Math.PI / 4, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.stroke();
}

function draw3() {
    context.beginPath();    // clear old path
    context.ellipse(x3,y3,15,15,Math.PI / 4, 0, 2 * Math.PI);
    context.fillStyle = "green";
    context.fill();
    context.stroke();
}

function draw4() {
    context.beginPath();    // clear old path
    context.ellipse(x4,y4,15,15,Math.PI / 4, 0, 2 * Math.PI);
    context.fillStyle = "purple";
    context.fill();
    context.stroke();
}

function draw5() {
    context.beginPath();    // clear old path
    context.ellipse(x5,y5,15,15,Math.PI / 4, 0, 2 * Math.PI);
    context.fillStyle = "pink";
    context.fill();
    context.stroke();
}

function checkEdges(){
  //checkEdges
  if(x > canvas.width || x < 0) dx = -dx;
  if(y > canvas.height || y < 0)dy =-dy;
  //ball 2
  if(x2 > canvas.width || x2 < 0) dx2 = -dx2;
  if(y2 > canvas.height || y2 < 0)dy2 =-dy2;
  //ball3
  if(x3 > canvas.width || x3 < 0) dx3 = -dx3;
  if(y3 > canvas.height || y3 < 0)dy3 =-dy3;
  //ball4
  if(x4 > canvas.width || x4 < 0) dx4 = -dx4;
  if(y4 > canvas.height || y4 < 0)dy4 =-dy4;
  //ball5
  if(x5 > canvas.width || x5 < 0) dx5 = -dx5;
  if(y5 > canvas.height || y5 < 0)dy5 =-dy5;
}
