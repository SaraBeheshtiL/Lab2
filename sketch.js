console.log("I believe I can do this!");

let circleX;
let circleY;
let speedX;
let speedY;
let size = 100;
let sizeIncrement = 1;
let radius = size / 2;
let passed = true;

function setup() {
  createCanvas(800, 600);
  circleX = 100;
  circleY = 100;
  speedX = 5;
  speedY = 5;
}
//the measurement above is pixels for Canvas
// the origin(0,0) on Canvas is on the left up and the x axis goes to right and
//y axis to the bottom

function draw() {
  background(20);

  fill(255, 120, 60);
  //circleY = height / 2; //Height is the variable that p5 know and predefined
  // console.log(circleX); // It's going to be 700
  circleX = circleX + speedX;
  circleY = circleY + speedY;

  circle(circleX, circleY, size);

  //console.log(circleX);
  size = size + sizeIncrement;
  radius = size / 2;
  // if the x position of our circle was larger than the width of canvas, return
  if (circleX >= width - radius || circleX < radius) {
    speedX = speedX * -1;
    sizeIncrement = sizeIncrement * -1;
  }
  if (circleY >= height - radius || circleY < radius) {
    speedY = speedY * -1;
  }
}
//function mousePressed() {
// circleX = 0;
//}
