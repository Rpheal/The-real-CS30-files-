// Cars Cars Cars!
// Rapheal
// October 17th 2023

let eastbound = [];
let westbound = [];
let trafficLight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  // To populate the eastbound array with vehicles
  for (let i = 0; i < 20; i++) {
    let eastboundVechiles = new Vehicle(random(0,width),random(height/2+25,height *0.75-25),round(random(1)),1);
    eastbound.push(eastboundVechiles);
  }


  // To populate the westbound array with vehicles
  for (let i = 0; i < 20; i++) {
    let westboundVechiles = new Vehicle(random(0,width), random(height*0.25+25,height/2-25),round(random(1)),0);
    westbound.push(westboundVechiles);
  }
  trafficLight = new TrafficLight(width/2,height/2 - 225);
}
function drawRoad(){
  fill(0);
  rect(width/2,height/2,width,height/2);
  stroke("white");
  strokeWeight(5);
  for(let x=0; x<width ; x+=60){
    line(x,height/2,x + 30,height/2);
  }

}
function draw() {
  trafficLight.update();
  background(200);
  drawRoad();
  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].action();
  }


  for (let i = 0; i < westbound.length; i++) {
    westbound[i].action();
  }
 
  trafficLight.render();
}
class Vehicle{
  constructor(x, y,type, direction){
    this.x = x;
    this.y = y;
    this.type = type;
    this.fillColor = color(random(255), random(255), random(255));
    this.direction = direction;
    this.xSpeed = 5;
  }

  display(){
    fill(this.fillColor);
    if(this.type === 0){
      rect(this.x,this.y,70,20);
    }
    else if(this.type ===1){
      ellipse(this.x,this.y,80,20);
    }

  }

  move(){
    if(this.direction ===1){
      this.x += this.xSpeed;
    }

    else if(this.direction === 0){
      this.x -= this.xSpeed;
    }

    if (this.x > width && this.direction === 1) {
      this.x = 0;
    }

    else if (this.x < 0 && this.direction === 0) {
        this.x = width;
  }
}
  speedUp(){
    if (this.xSpeed < 15) {
      this.xSpeed += 1.2;
    }
  }
  speedDown(){
    if (this.xSpeed > 1) {
      this.xSpeed -= 1.2;
    }

  }
  changeColor(){
    this.fillColor = color(random(255), random(255), random(255));

  }
  action(){
    if(trafficLight.state === "amber"){
      this.display();
      this.move();
      if (this.xSpeed > 0.5) {
        this.xSpeed = this.xSpeed - this.xSpeed / 64;
      }
    }
    else if(trafficLight.state ==="red"){
      this.display();


    }
    else{
      this.display();
      this.move();
      if (random(1) <= 0.01){
        this.speedUp();
      }  
      if (random(1) <= 0.01){          
        this.speedDown();
      }
      if (random(1) <= 0.01){
        this.changeColor()}    
    }
  }


}
function mousePressed() {

  if (keyIsPressed && keyCode === SHIFT && mouseButton === LEFT  ){
    let westboundVechiles = new Vehicle(random(0,width), random(height*0.25+50,height/2-50),round(random(1)),0);
    westbound.push(westboundVechiles);


  }
  else if  (mouseButton === LEFT) {
    let eastboundVechiles = new Vehicle(random(0,width),random(height/2+50,height *0.75-50),round(random(1)),1);
    eastbound.push(eastboundVechiles);
   
  }

}
class TrafficLight {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.state = "green";
    this.frames = 0;
    this.stopCars = false;
    this.size = min(width,height) / 6.5;
  }


  render() {
    // Drawing the traffic light background
    strokeWeight(min(width, height) / 128);
    fill(55);
    stroke(0);
    rect(this.x, this.y, this.size/3, this.size);


    // Drawing the red circle
    fill(this.state === "red" ? color(255, 0, 0) : color(75,0,0));
    circle(this.x, this.y-height/24 , this.size/5);

    fill(this.state === "amber" ? color(255, 255, 0) : color(75,75,0));
    circle(this.x, this.y, this.size/5);

    // Drawing the green circle
    fill(this.state === "green" ? color(0, 255, 0) : color(0,75,0));
    circle(this.x, this.y+height/24, this.size/5);
  }


  update() {
   if (this.state === "amber") {
      this.frames++;
      if (this.frames >= 60) {
        this.state = "red";
        this.frames = 0;
      }
    }
  else if (this.state === "red") {
    this.frames++;
    if (this.frames >= 120) {
      this.state = "green";
      this.stopCars = false;
      this.frames = 0;
      }
    }
  }

  startRed(){
    this.state = "amber";
  }
}

function keyPressed() {
  if (trafficLight.state === "green") {
    if (keyCode === 32) { //  to check if the spacebar whose keycode is 32 has been pressed
      trafficLight.startRed(); // Set the traffic light to "red"
  }
}
}