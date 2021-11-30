//Greta Hachigian-Kreutzer
//Cells
//1122

var world;   //world object


window.onload = init; //After the window has been loaded, go to init

function init(){
    world = new World();  //global world
    animate();          //start animation
}

function animate(){
    world.run();    //run the world
    requestAnimationFrame(animate);
}
