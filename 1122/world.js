function World() {
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

        this.numCols = 40;
        this.cellWidth = this.world.width/this.numCols;
        this.numRows = 30;
        this.cellHeight = this.world.height/this.numRows;

        //  cells #
        this.cells = new Array(this.numRows);

        //  array of cells
        for(let r=0; r<this.cells.length; r++){
          this.cells[r] = new Array(this.numCols);
          for(let c=0; c<this.numCols; c++){
            this.cells[r][c] = new Cell(this, r, c);
          }
        }

        this.scaleX = this.canvas2.width / this.world.width;
        this.scaleY = this.canvas2.height / this.world.height;

        window.addEventListener("keypress", function (event) {
            switch (event.code) {
                case "KeyW":
                    if (world.canvas1Loc.y + 100 > world.world.top)
                        world.canvas1Loc.y -= 20;
                    break;
                case "KeyS":
                    if (world.canvas1Loc.y + world.canvas1.height - 100 < world.world.bottom)
                        world.canvas1Loc.y += 20;
                    break;
                case "KeyA":
                    if (world.canvas1Loc.x + 100 > world.world.left)
                        world.canvas1Loc.x -= 20;
                    break;
                case "KeyD":
                    if (world.canvas1Loc.x + world.canvas1.width - 100 < world.world.right)
                        world.canvas1Loc.x += 20;
                    break;
                    break;
            }
        }, false);
    }//  +++++++++++++++++++++++++++++++++++++++++++++++++++  end Constructor

    // function to run the game each animation cycle
    World.prototype.run = function() {

        let ctx1 = this.context1;
        let cnv1 = this.canvas1;
        let ctx2 = this.context2;
        let cnv2 = this.canvas2;
        ctx1.fillStyle = "black";
        ctx2.fillStyle = "white";
        ctx2.fillRect(0, 0, cnv2.width, cnv2.height);

        ctx1.save();
        // loc
        ctx1.translate(-this.canvas1Loc.x, -this.canvas1Loc.y);
        //bounds of the world
        ctx1.beginPath();
        ctx1.strokeStyle = "green";
        ctx1.lineWidth = 2;
        ctx1.stroke();
        //x/y
        ctx1.beginPath();
        ctx1.moveTo(this.world.left, 0);
        ctx1.lineTo(this.world.right, 0);
        ctx1.moveTo(0, this.world.top);
        ctx1.lineTo(0, this.world.bottom);
        ctx1.strokeStyle = "red";
        ctx1.lineWidth = 2;
        ctx1.stroke();

        ctx2.save();
        // scale canvas2
        ctx2.scale(this.scaleX, this.scaleY);
        // center the world in canvas2
        ctx2.translate(this.world.width / 2, this.world.height / 2);
        // axes
        ctx2.beginPath();
        ctx2.moveTo(this.world.left, 0);
        ctx2.lineTo(this.world.right, 0);
        ctx2.moveTo(0, this.world.top);
        ctx2.lineTo(0, this.world.bottom);
        ctx2.strokeStyle = "red";
        ctx2.lineWidth = 1 / this.scaleX;
        ctx2.stroke();

        // draw the outline of canvas1 in canvas2
        let c1x = this.canvas1Loc.x;
        let c1y = this.canvas1Loc.y;
        ctx2.beginPath();
        ctx2.strokeStyle = "blue";
        ctx2.lineWidth = 1 / this.scaleX;
        ctx2.rect(c1x, c1y, cnv1.width, cnv1.height);
        ctx2.stroke();

        //  render cells
        for(let r=0;r<this.numRows; r++){
          for(let c=0; c<this.numCols; c++){
            this.cells[r][c].run();
          }
        }

        ctx1.restore();
        ctx2.restore();
    }// ++++++++++++++++++++++++  end run()
