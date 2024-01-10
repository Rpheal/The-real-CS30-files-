// Business Simulator
// Rapheal Oki & Alvin Shen
// 12/11/2023

let score = 0; let balance = 10000; let stockPrice = 100;
let stocksOwned = 0; let buyStockButton; let sellStockButton; let mgr;


function setup() {
  mgr = new SceneManager();
  mgr.addScene(homePage);
  mgr.showScene(homePage);

  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);

// Menu
// Initialization of the Menubuttons and properties styling included 
  fill(250);
  
  homeButton = new Button({
    x: width / 13,	y: 100,
		width: 100,		height: 50, // properties of the button
		content: 'Home',
		on_press() {
      mgr.showScene(stockPage);
		}
  });
  homeButton.style("default", {background: '#00C2D1', color: '#fff'});
  homeButton.style("hover", {
    background: 'F4FAFF',
    color: '#06f'
  })

  stockButton = new Button({
    x: width / 13,	y: 300,
		width: 100,		height: 50, // properties of the button
		content: 'Stock',
		on_press() {
      mgr.showScene(stockPage);
		}
  });
  stockButton.style("default", {background: '#00C2D1', color: '#fff'});
  stockButton.style("hover", {
    background: 'F4FAFF',
    color: '#06f'
  })

  businessButton = new Button({
    x: width / 13,	y: 500,
		width: 100,		height: 50, // properties of the button
		content: 'Business',
		on_press() {
      mgr.showScene(stockPage);
		}
  });
  businessButton.style("default", {background: '#00C2D1', color: '#fff'});
  businessButton.style("hover", {
    background: '#F4FAFF',
    color: '#06f'
  })

  profileButton = new Button({
    x: width / 13,	y: 700,
		width: 100,		height: 50, // properties of the button
		content: 'Profile',
		on_press() {
      mgr.showScene(stockPage);
		}
  });
  profileButton.style("default", {background: '#00C2D1', color: '#fff'});
  profileButton.style("hover", {
    background: '#F4FAFF',
    color: '#06f'
  })

  rankingButton = new Button({
    x: width / 13,	y: 900,
		width: 100,		height: 50, // properties of the button
		content: 'Ranking',
		on_press() {
      mgr.showScene(stockPage);
		}
  });
  rankingButton.style("default", {background: '#00C2D1', color: '#fff'});
  rankingButton.style("hover", {
    background: '#F4FAFF',
    color: '#06f'
  })


// Format of Menu ended.

  buyStockButton = new Button({
		x: width / 3,	y: 190,
		width: 100,		height: 50, // properties of the button
    //style.background('green');
		content: 'Buy',
		on_press() {
      buyStock();
		}
	});

  buyStockButton.style("default", {background: 'green', color: '#fff'});


  sellStockButton = new Button({
		x: width / 3+150,	y: 190,
		width: 100,		height: 50, // properties of the button
		content: 'Sell',
		on_press() {
      sellStock();
		}
	});

  sellStockButton.style("default", {background: 'red', color: '#fff'});



}


function draw() {
  // Button
  fill(150, 200, 255);
  rectMode(CORNER);
  rect(width / 2 - 80, height / 2 + 50, 160, 50, 15);
  fill(0);
  text("Click me!", width / 2, height / 2 + 75);
  mgr.draw()
}


function mouseClicked() {
  // Check if the mouse is over the button
  if (
    mouseX > width / 2 - 80 &&
    mouseX < width / 2 + 80 &&
    mouseY > height / 2 + 50 &&
    mouseY < height / 2 + 100
  ) {
    // Increment the score when the button is clicked
    score++;
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function displayInfo() {
  fill(0);
  textSize(16);
  text(`Balance: $${balance.toFixed(2)}`, width/3, 30);
  text(`Stock Price: $${stockPrice.toFixed(2)}`, width/3, 60);
  text(`Stocks Owned: ${stocksOwned}`, width/3, 90);
  text(`Portfolio Value: $${(balance + stocksOwned * stockPrice).toFixed(2)}`, width/3, 120);
}


function buyStock() {
  if (balance >= stockPrice) {
    stocksOwned++;
    balance -= stockPrice;
    updateStockPrice();
  } else {
    alert('Not enough balance to buy stocks.');
  }
}


function sellStock() {
  if (stocksOwned > 0) {
    stocksOwned--;
    balance += stockPrice;
    updateStockPrice();
  } else {
    alert('No stocks to sell.');
  }
}

function updateStockPrice() {
  stockPrice = random(80, 120);
}


// scene manager

function homePage(){
  // building the home page of the simulator using the Scene Manager 

  this.setup = function(){
    
  }

  this.draw = function(){
    background('#90BDDF');
    fill(0);
    // displayInfo();
    text(`Money: ${score}`, width / 2, height / 2);
    sellStockButton.draw();
    buyStockButton.draw();
    fill('#122C3F');
    rect(0,0,width/10, height, 0, 20, 20, 0);
    homeButton.draw();
    stockButton.draw();
    businessButton.draw();
    profileButton.draw();
    rankingButton.draw();

    
    
    // Button
    fill(150, 200, 255);
    rectMode(CORNER);
    rect(width / 2 - 80, height / 2 + 50, 160, 50, 15);
    fill(0);
    text("Click me!", width / 2, height / 2 + 75);


  }

  this.mousePressed = function(){

  }
}

// Stock Page

function stockPage(){
  // building the home page of the simulator using the Scene Manager

  this.setup = function(){
    
  }

  this.draw = function(){
    background('#90BDDF');
    fill('#122C3F');
    rect(0,0,width/10, height, 0, 20, 20, 0);
    homeButton.draw();
    stockButton.draw();
    businessButton.draw();
    profileButton.draw();
    rankingButton.draw();

  }

  this.mousePressed = function(){

  }
}

function businessPage(){
  // building the home page of the simulator using the Scene Manager

  this.setup = function(){
    
  }

  this.draw = function(){
    background('#90BDDF');
    fill('#122C3F');
    rect(0,0,width/10, height, 0, 20, 20, 0);
    homeButton.draw();
    stockButton.draw();
    businessButton.draw();
    profileButton.draw();
    rankingButton.draw();

  }

  this.mousePressed = function(){

  }
}

function profilePage(){
  // building the home page of the simulator using the Scene Manager

  this.setup = function(){
    
  }

  this.draw = function(){
    background('#90BDDF');
    fill('#122C3F');
    rect(0,0,width/10, height, 0, 20, 20, 0);
    homeButton.draw();
    stockButton.draw();
    businessButton.draw();
    profileButton.draw();
    rankingButton.draw();

  }

  this.mousePressed = function(){

  }
}

function rankingPage(){
  // building the home page of the simulator using the Scene Manager

  this.setup = function(){
    
  }

  this.draw = function(){
    background('#90BDDF');
    fill('#122C3F');
    rect(0,0,width/10, height, 0, 20, 20, 0);
    homeButton.draw();
    stockButton.draw();
    businessButton.draw();
    profileButton.draw();
    rankingButton.draw();

  }

  this.mousePressed = function(){

  }
}



//
// class Stock {
//   constructor(name, initialPrice, volatility) {
//     this.name = name;
//     this.price = initialPrice;
//     this.history = [];
//     this.volatility = volatility;
//   }

//   updatePrice() {
//     // Simulate a random walk model
//     let randomChange = randomGaussian(0, this.volatility);
//     this.price += randomChange;

//     // Ensure the price doesn't go negative
//     this.price = max(this.price, 0);

//     // Store the current stock price in the history array
//     this.history.push(this.price);

//     // Trim the history array to keep only the last 30 values
//     if (this.history.length > 30) {
//       this.history.shift();
//     }
//   }

//   drawGraph(x, y, width, height) {
//     // Draw the stock price graph
//     noFill();
//     stroke(0, 0, 255);
//     strokeWeight(2);
//     beginShape();
//     for (let i = 0; i < this.history.length; i++) {
//       let graphX = map(i, 0, this.history.length - 1, x, x + width);
//       let graphY = map(this.history[i], min(this.history), max(this.history), y + height, y);
//       vertex(graphX, graphY);
//     }
//     endShape();

//     // Draw graph border
//     rect(x, y, width, height);
//   }
// }

// let marcedesBenc = new Stock("Marcedes-Benc", 100, 2);
// let dmw = new Stock("DMW", 80, 3);
// let currentDate = new Date(2024, 0, 1); // January 1, 2024
// let daysPassed = 0;

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   // Set interval for stock price updates (every day)
//   setInterval(updateStockPrices, 86400000); // 86400000 milliseconds = 1 day
// }

// function draw() {
//   background(220);

//   // Display stock information
//   textSize(16);
//   fill(0);
//   text(`Marcedes-Benc Price: $${marcedesBenc.price.toFixed(2)}`, 10, 30);
//   text(`DMW Price: $${dmw.price.toFixed(2)}`, 10, 60);
//   text(`Date: ${currentDate.toDateString()}`, 10, 90);

//   // Draw stock price graphs
//   marcedesBenc.drawGraph(10, 120, 300, 150);
//   dmw.drawGraph(10, 300, 300, 150);
// }

// function updateStockPrices() {
//   // Update prices for both stocks
//   marcedesBenc.updatePrice();
//   dmw.updatePrice();

//   // Increment the date (1 day passed)
//   currentDate.setDate(currentDate.getDate() + 1);
//   daysPassed++;

//   // Display new date in console
//   console.log(`Day ${daysPassed}: ${currentDate.toDateString()}`);
// }

