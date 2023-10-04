// working with Noises
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global variables
let segmentLength = 5;
let ballY = 200;
let noisePositionRound = 50; // arbitray starting point
let noisePositionLine = 200;
let noisePositionBallY = 0;

const noiseShiift = 0.02; // the larger this value, the more 



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function wastefulLine(){
  // using a loop, let's draw a horizontal line made up of little seg
  let x = 0;
  while (x<width){
    // option 1 - using random()
    let lineValue = random(0,255);

    // option 2 - using noise
    lineValue = noise(noisePositionBallY); // 0-11
    lineValue = map(lineValue,0,1,0,255);
    noisePositionLine += noiseShiift;

    stroke(lineValue);
    line(x,height/2,x+segmentLength, height/2);
    x += segmentLength;
  }
}

function rectangleOnLine(){
  // draw rectangle which always sits on line
  rectMode(CORNERS);
  strokeWeight(6);
  stroke(0);


  // option 1 - using random() [uniform distribution]
  let roundedAmount = random(15,70);

  // option 2 - using noise()

  roundedAmount = noise(noisePositionRound); // returns value from 0-1
  roundedAmount = map(roundedAmount,0,1,2,70);
  noisePositionRound += noiseShiift;

  rect(width*0.2,height/2,width*0.5,height*0.2,roundedAmount);
}

function moveBall(){
  // option 1 - using random()
  // ballY += random(-20,20);

  // option 2 - using nosie()
  let dY = noise(noisePositionBallY); // 0-1
  dY= map(dY,0,1,-20,20);
  noisePositionBallY += noiseShiift;
  ballY += dY;
  
  circle(width*0.75, ballY,30);

}

function draw() {
  background(220);
  wastefulLine();
  rectangleOnLine();
  moveBall();
}


