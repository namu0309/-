let mover


function setup() {
  createCanvas(400, 400);
  mover = new mover(width/2,height/2)

}

function draw() {
  background(220);

  mover.update;
  mover.show;
}