//Greta Hachigian-Kreutzer
//Particle System
//1018

// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, ctx;
var particles = [];


function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    ctx = canvas.getContext("2d");

    //how to make particles look nice and be particles
    let x = canvas.width/2;
    let y = canvas.height/4;
    this.psystem = new ParticleSys(x, y);

      animate();
}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    //yay particles on screen now
      psystem.run();
    requestAnimationFrame(animate); // next cycle
}
