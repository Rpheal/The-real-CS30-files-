// Project Title
// Rapheal
// October 17th 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let eastbound = [];


function drawCarImage(){
  fill(0);
  rect(0,0,25,25);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(200);
  drawRoad();
  for (let i = 0; i<eastbound.length; i++){
    eastbound[i].action();
  }
}


function mouseClicked(){
  eastbound.push(new Vehicle(mouseX, mouseY, 1));
}

function drawCarImage(){
  fill(0);
  rect(0,0,25,25);
}

function drawRoad(){
  fill(0);
  noStroke();
  rect(width/2,height/2,width,height/1.9);
  for(let i=0; i < width; i+=100){
    stroke(255, 255, 0);
    strokeWeight(6);
    line(i,height/2,i+50,height/2);

  }
}


class Vehicle{
  // constructor
  constructor(x,y,direction){
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.c = color(random(255),random(255),random(255));
    this.type = int(random(2));
  }

  action(){
    // call the other functions like move, 
    this.display();
  }

  display(){
    if(this.type===0){
      this.drawCar();  // 0 -car
    }

    else if (this.type===1){ // 1 - car
      this.drawTruck();
    }
  }


  drawCar(){
    fill(this.c);
    rect(this.x,this.y,100,100);

  }

  drawTruck(){
    fill(this.c);
    ellipse(this.x,this.y,100,40);

  }
}