let mover


function setup() {
  createCanvas(400, 400);
  background(0);
  mover = new mover(width/2,height/2);

}

function draw() {
  background(0);

  mover.update();
  mover.show();
  mover.edge();
}