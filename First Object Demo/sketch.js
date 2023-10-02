// First Object Demmo
// Rapheal
// October 2nd, 2023
//
// A bunch od walkers out for a walk



// Global variable
let w;
function setup() {
  createCanvas(windowWidth, windowHeight);
  w = new Walker(width/2,height/2,"red");
}

function draw() {
  background(220);
  w.move();
  w.display();
}


class Walker {
  // class constructor and properties
  constructor(x,y,c){
    this.x = x;
    this.y = y;
    this.c = c;
    this.speed = 10;
    this.size = 10;

  }



  // class methods/functions
  display(){
    // draw the Walkerat its position
    rectMode(CENTER);
    fill(this.c);
    square(this.x,this.y,this.size);
  }

  move(){
    //move via a random walker algorithm

    let myChoice = Math.floor(random(4));
    if (myChoice===0) this.x -= this.speed;
    else if (myChoice===1) this.x += this.speed;
    else if (myChoice===2) this.x -= this.speed;
    else this.y += this.speed;
  }
  
}