//Greta Hachigian-Kreutzer
//World Bigger Than Canvas
//1103

var world;   //world object


window.onload = init; //After the window has been loaded, go to init

function init(){
    world = new World();  //global world
    animate();          //start animation
}

//animation loop--- 60 fps
function animate(){
    world.run();    //run the world
    requestAnimationFrame(animate);
}
