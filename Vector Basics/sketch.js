// vector Basics
// Rapheal
// Nov, 1, 2023

// Global varaible
let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  movers.push(new Mover(mouseX, mouseY));
}

function draw() {
  background(220);
  for (let i =0; i<movers.length){
  for (let m of movers){
    m.move(); m.display();
  }}
}

class Mover{
  //contructor and class properties
  constructor(x,y){
    this.position = createVector(x,y); this.s = 20;
    this.velocity = createVector(random(-3,3),random(-5,-3));
    this.gravity = createVector(0,0.1);
  }

  // class method

  move(){
    // apply forces first (modify our velocity)
    this.velocity.add(this.gravity);
    // Then apply our velovity to position
    this.position.add(this.velocity);
  }

  display(){
    translate(this.position.x, this.position.y);
    circle(0,0,this.s);
    pop();
  }
}