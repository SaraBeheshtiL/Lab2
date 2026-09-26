let circleX = 50;
let circleY = 50;
let speedX = 5;
let speedY = 5;
let size = 100;
let sizeIncrement = 1;
let radius = size / 2;
let rightColor = "blue";
let leftColor = "red";
let ballColor;
let r = 10;
let g = 20;
let b = 30;
let op = 40;
let oldSpeedY;
let oldSpeedX;
let sizeIncrementt;

function setup() {
  canvas = createCanvas(800, 600);
  //canvas.parent("sketch-holder");
}

function draw() {
  background(20);

  // left half is one color, right half is the other
  //if (circleX > width / 2) {
  //ballColor = rightColor;
  //} else {
  // ballColor = leftColor;
  //}
  fill(r, b, g, op);
  if (circleY == radius || circleY == height - radius) {
    r = random(100, 255);
    b = random(100, 255);
    g = random(100, 255);
    op = random(100, 255);
  }

  // move
  circleX = circleX + speedX;
  circleY = circleY + speedY;

  // grow (or shrink)
  size = size + sizeIncrement;
  radius = size / 2;

  // bounce off the left and right walls, and flip growing/shrinking
  if (circleX >= width - radius) {
    circleX = width - radius;
    speedX = speedX * -1;
    sizeIncrement = sizeIncrement * -1;
  }

  if (circleX < radius) {
    circleX = radius;
    speedX = speedX * -1;
    sizeIncrement = sizeIncrement * -1;
  }

  // bounce off the top and bottom walls
  if (circleY >= height - radius) {
    circleY = height - radius;
    speedY = speedY * -1;
  }
  if (circleY < radius) {
    circleY = radius;
    speedY = speedY * -1;
  }

  circle(circleX, circleY, size);
}

//by clicking the ball's speed changes on random number
function mousePressed() {
  //circleX = 100;
  speedY = speedY * -1;
  speedX = speedX * -1;
}

function keyPressed() {
  if (key === " ") {
    //first we define new variables as speedXX and speedYY, to save
    //the speed for later
    speedXX = speedX;
    speedYY = speedY;
    sizeIncrementt = sizeIncrement;

    // then we set the value for the speedX and speedY, zero to pause the ball
    speedX = 0;
    speedY = 0;
    sizeIncrement = 0;
  }
  // this means that we pause the ball when we press the space button

  //now we want to pree the space button again to restore the earlier speed back
  if (key === "r") {
    speedX = speedXX;
    speedY = speedYY;
    sizeIncrement = sizeIncrementt;
  }
}
