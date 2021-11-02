//Greta Hachigian-Kreutzer
//Particle System
//1018

// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, ctx;
var particles = [];
var psystem = [];


function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    ctx = canvas.getContext("2d");
    cnv.addEventListener('click', function(e){
        //psystem.x = e.clientX;
        //psystem.y = e.clientY;
        psystem.push(new ParticleSys(e.clientX, e.clientY));
        //console.log(clicking);
    });

    animate();
}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    //yay particles on screen now
  for(var i = 0;i<psystem.length;i++){
   psystem[i].run();
 }

    requestAnimationFrame(animate); // next cycle
}
