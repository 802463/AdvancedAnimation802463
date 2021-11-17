//Greta Hachigian-Kreutzer
//Ecosystem2

var world;

window.onload = init;

function init(){
    world = new World(3000,3000);
    animate();
}

function animate(){
  world.run();
  requestAnimationFrame(animate);
}
