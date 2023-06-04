let circleX;
let circleY;
let circleSize;

function setup() {
  createCanvas(600, 600);
  noFill();
  strokeWeight(5);
  circleX = width / 1;
  circleY = height / 2;
  circleSize = 0;

}

function draw() {
  background(0, 128, 255);

  circleSize += 5;

  stroke(0, 64, 128);
  circle(circleX, circleY, circleSize);
  circle(circleX, circleY, circleSize * .75);
  circle(circleX, circleY, circleSize * .5);
}

function mousePressed(){
  circleX = mouseX;
  circleY = mouseY;
  circleSize = 0;
}