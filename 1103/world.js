function World(){

    this.canvas1 = document.getElementById('cnv1');
    this.context1 = this.canvas1.getContext('2d');
    this.canvas2 = document.getElementById('cnv2');
    this.context2 = this.canvas2.getContext('2d');

    this.canvas1Loc = new JSVector();

    this.world = {
        top: -1500,
        left: -2000,
        bottom: 1500,
        right: 2000,
        width: 4000,
        height: 3000
    }
    
    //scale vs world
    this.scaleX = this.canvas2.width/this.world.width;
    this.scaleY = this.canvas2.height/this.world.height;

    // add an event handler such that the a, s, w, d keys
    // will reposition the canvas within the world.
    window.addEventListener("keypress", function(event){
        switch(event.code){
            case "KeyW":
                if(world.canvas1Loc.y+100 > world.world.top)
                    world.canvas1Loc.y -= 20;
                break;
            case "KeyS":
                if(world.canvas1Loc.y + world.canvas1.height -100 < world.world.bottom)
                    world.canvas1Loc.y += 20;
                break;
            case "KeyA":
                if(world.canvas1Loc.x+100 > world.world.left)
                    world.canvas1Loc.x -= 20;
                break;
            case "KeyD":
                if(world.canvas1Loc.x + world.canvas1.width -100 < world.world.right)
                    world.canvas1Loc.x += 20;
                break;
            break;
            }
    }, false);

}//++++++++++++++++++++++++++++++  end world constructor


// function to run the world each animation cycle
World.prototype.run = function(){
    let ctx1 = this.context1;
    let cnv1 = this.canvas1;
    let ctx2 = this.context2;
    let cnv2 = this.canvas2;
    ctx1.fillStyle =  "black";
    ctx1.fillRect(0,0,cnv1.width,cnv1.height);
    ctx2.fillStyle =  "black";
    ctx2.fillRect(0,0,cnv2.width,cnv2.height);

    // translate canvas1 according to the location of the canvas in the world
    ctx1.save();
    ctx1.translate(this.canvas1Loc.x*(-1), this.canvas1Loc.y*(-1));

    //bounds of the world in canvas1
    ctx1.strokeStyle = "rgba(0, 230, 64, 1)"
    ctx1.beginPath();
    ctx1.lineWidth = 3;
    ctx1.strokeRect(this.world.left, this.world.top, this.world.width, this.world.height);

    //x and y axes in canvas1
    ctx1.strokeStyle = "rgba(240, 52, 52, 1)"
    ctx1.beginPath();
    ctx1.moveTo(0, this.world.top);
    ctx1.lineTo(0, this.world.bottom);
    ctx1.stroke();
    ctx1.moveTo(this.world.left, 0);
    ctx1.lineTo(this.world.right, 0);
    ctx1.stroke();

    // scale canvas2- contain the entire world
    ctx2.save();
    ctx2.beginPath();
    ctx2.lineWidth = 30;
    ctx2.strokeStyle = "rgba(240, 52, 52, 1)"
    ctx2.scale(this.scaleX, this.scaleY);

    //center canvas2 in world
    ctx2.translate(this.world.width/2, this.world.height/2);

    //outline in canvas2
    ctx2.strokeStyle = "rgba(255, 255, 255, 1)"
    ctx2.strokeRect(this.canvas1Loc.x, this.canvas1Loc.y, this.canvas1.width, this.canvas1.height);

    //x and y axes
    ctx2.strokeStyle = "rgba(240, 52, 52, 1)"
    ctx2.moveTo(0, this.world.top);
    ctx2.lineTo(0, this.world.bottom);
    ctx2.stroke();
    ctx2.moveTo(this.world.left, 0);
    ctx2.lineTo(this.world.right, 0);
    ctx2.stroke();

    ctx1.restore();
    ctx2.restore();
}
