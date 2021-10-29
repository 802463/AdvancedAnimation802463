//Greta Hachigian-Kreutzer
//Flocking
//1026

// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, ctx;
let birds = [];
let numBirds = 100;

function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    ctx = canvas.getContext("2d");


    for(var i=0;i<numBirds;i++){
    birds.push(new Bird(new JSVector(Math.random()*canvas.width, Math.random()*canvas.height)));
    }


      animate();
}


// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //yay birds on screen now
    for(var i=0; i<numBirds ;i++){
      birds[i].run(birds);
    }

    requestAnimationFrame(animate); // next cycle
}
