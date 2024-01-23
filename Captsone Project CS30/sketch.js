// Business Simulator
// Rapheal Oki & Alvin Shen
// 12/11/2023

let score = 0;
let balance = 10000; 
let stockPrice = 100;
let stocksOwned = 0; 
let buyStockButton; 
let sellStockButton; 
let mgr; 
let marcedesBenc; 
let dmw;
let currentDate; 
let daysPassed;

let mykrosofft;
let tassla;
let amason;
let bojieng;


let user;

let buyButtons = [];
let sellButtons = [];

function pageButtons(){
  stockButton.draw();
  businessButton.draw();
  profileButton.draw();
  rankingButton.draw();
}

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

  // Stock Button
  stockButton = new Button({
    x: width / 13,	y: 100,
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

  // Business Button
  businessButton = new Button({
    x: width / 13,	y: 300,
		width: 100,		height: 50, // properties of the button
		content: 'Business',
		on_press() {
      mgr.showScene(businessPage);
		}
  });
  businessButton.style("default", {background: '#00C2D1', color: '#fff'});
  businessButton.style("hover", {
    background: '#F4FAFF',
    color: '#06f'
  })

  //Profile Button
  profileButton = new Button({
    x: width / 13,	y: 500,
		width: 100,		height: 50, // properties of the button
		content: 'Profile',
		on_press() {
      mgr.showScene(profilePage);
		}
  });
  profileButton.style("default", {background: '#00C2D1', color: '#fff'});
  profileButton.style("hover", {
    background: '#F4FAFF',
    color: '#06f'
  })

  // Property Button
  propertyButton = new Button({
    x: width / 13,	y: 100,
		width: 100,		height: 50, // properties of the button
		content: 'Home',
		on_press() {
      mgr.showScene(stockPage);
		}
  });
  propertyButton.style("default", {background: '#00C2D1', color: '#fff'});
  propertyButton.style("hover", {
    background: 'F4FAFF',
    color: '#06f'
  })
  

  // Ranking Button
  rankingButton = new Button({
    x: width / 13,	y: 700,
		width: 100,		height: 50, // properties of the button
		content: 'Ranking',
		on_press() {
      mgr.showScene(rankingPage);
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
    // homeButton.draw();
    pageButtons();

    
    
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




function stockPage(){
  // building the Stock page of the simulator using the Scene Manager\
  // Stock Page
  marcedesBenc = new Stock("Marcedes-Benc", 100, 2);
  dmw = new Stock("DMW", 80, 3);
  currentDate = new Date(2024, 0, 1); // January 1, 2024
  daysPassed = 0;
  mykrosofft = new Stock("Mykrosofft", 120, 2.5);
  tassla = new Stock("Tassla", 150, 4);
  amason = new Stock("Amason", 180, 5);
  bojieng = new Stock("Bojieng", 90, 2.2);
  user = new User();



  let stocks = [marcedesBenc, dmw, mykrosofft, tassla, amason, bojieng];


  this.setup = function(){
    setInterval(updateStockPrices, 1000); // 86400000 milliseconds = 1 day


    
  function updateStockPrices() {
    // Update prices for all stocks
    for (let stock of stocks) {
      stock.updatePrice();
    }
  }

  function buyStockPrompt(stock) {
    let quantity = prompt(`Enter the quantity of ${stock.name} stocks you want to buy:`);
    quantity = parseInt(quantity);
    if (!isNaN(quantity) && quantity > 0) {
      user.buyStock(stock, quantity);
    }
  }

  function sellStockPrompt(stock) {
    let quantity = prompt(`Enter the quantity of ${stock.name} stocks you want to sell:`);
    quantity = parseInt(quantity);
    if (!isNaN(quantity) && quantity > 0) {
      user.sellStock(stock, quantity);
    }
  }



  // Initialize buttons
  for (let i = 0; i < stocks.length; i++) {
    let rowNum = floor(i / 2);
    let colNum = i % 2;

    let buyButtonX = 20 + colNum * (width / 2 + 20);
    let sellButtonX = 20 + colNum * (width / 2 + 20) + 60 + 5;
    let buttonY = 30 + rowNum * (height / 3) + (height / 3) - 20;

    let buyButton = new buttons("Buy", buyButtonX, buttonY, 60, 20, () => buyStockPrompt(stocks[i]));
    let sellButton = new buttons("Sell", sellButtonX, buttonY, 60, 20, () => sellStockPrompt(stocks[i]));

    buyButtons.push(buyButton);
    sellButtons.push(sellButton);
  }

  }

  this.draw = function(){
    background('#90BDDF');
    fill('#122C3F');
    rect(0,0,width/10, height, 0, 20, 20, 0);
    // homeButton.draw();
    pageButtons();

      // Display stock information and draw graphs with 2 stocks on each row
  let numRows = 3;
  let numCols = 2;
  let xOffset = 20;
  let yOffset = 30;

  let cellWidth = (width - (numCols + 1) * xOffset) / numCols;
  let cellHeight = (height - yOffset) / numRows;

  for (let i = 0; i < stocks.length; i++) {
    let rowNum = floor(i / numCols);
    let colNum = i % numCols;

    let stock = stocks[i];



    // Display stock information
    textSize(14); // Smaller text size
    fill(50); // Darker text color
    text(`${stock.name} Price: $${stock.price.toFixed(2)}`, xOffset + colNum * (cellWidth + xOffset), yOffset + rowNum * cellHeight + 15);

    // Display user balance
    text(`User Balance: $${user.balance.toFixed(2)}`, xOffset + colNum * (cellWidth + xOffset), yOffset - 10);

    // Draw stock price graph
    stock.drawGraph(
      xOffset + colNum * (cellWidth + xOffset),
      yOffset + 20 + rowNum * cellHeight,
      cellWidth,
      cellHeight - 20
    );

    // Draw Buy and Sell buttons
    buyButtons[i].display();
    sellButtons[i].display();
  }

  // // Display user's current holdings and portfolio value
  // textSize(16);
  // fill(50); // Darker text color
  // text("Portfolio:", xOffset, height - 60);
  // for (let i = 0; i < user.holdings.length; i++) {
  //   let holding = user.holdings[i];
  //   text(`${holding.name}: ${holding.quantity} stocks - Value: $${(holding.price * holding.quantity).toFixed(2)}`, xOffset, height - 30 - i * 30);
  // }
  // text(`Total Portfolio Value: $${user.calculatePortfolioValue().toFixed(2)}`, xOffset, height - 10);

  //   // the block of code for the the stock graph
  //   // background(220);

  //   // Display stock information
  //   textSize(16);
  //   fill(0);
  //   text(`Marcedes-Benc Price: $${marcedesBenc.price.toFixed(2)}`, width/5, 30);
  //   text(`DMW Price: $${dmw.price.toFixed(2)}`, width/5, 50);
  //   text(`Date: ${currentDate.toDateString()}`, width/5, 70);
  
  //   // Draw stock price graphs
  //   marcedesBenc.drawGraph(width/7, 90, 300, 150);
  //   dmw.drawGraph(width/7, 250, 300, 150);

  // }

  // this.mousePressed = function(){

  // }
}
}

function mouseClicked() {
  // Check if Buy or Sell button is clicked
  for (let i = 0; i < stocks.length; i++) {
    if (buyButtons[i].isClicked(mouseX, mouseY)) {
      buyButtons[i].onClick();
    }

    if (sellButtons[i].isClicked(mouseX, mouseY)) {
      sellButtons[i].onClick();
    }
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
    // homeButton.draw();
    pageButtons();

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
    // homeButton.draw();
    pageButtons();

    // The profile card
    fill('#122C3F');
    rect(width/7, 90,400,400,20,20,20,20);
    textSize(16);
    fill('#90BDDF');
    text('Fortune', width/7+60, 160 );
    text('Balance', width/7+60, 200);
    text('Stocks  ', width/7+60, 240);
    // text(`DMW Price: $${dmw.price.toFixed(2)}`, width/5, 50);
    // text(`Date: ${currentDate.toDateString()}`, width/5, 70);

    // Statistics Display cars
    fill('#122C3F');
    rect(width/7, 510,400,400,20,20,20,20);
    fill('#90BDDF');
    text('Statistics', width/7+185, 570 );

    // Assets display card to show the pictures of property like cars and real estate houses that the user owns
    fill('#122C3f');
    rect(width/7 + 500, 90, 1000,820,20,20,20,20);

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
    pageButtons();

  }

  this.mousePressed = function(){

  }
}

// class Stock {
//   constructor(name, initialPrice, volatility) {
//     this.name = name;
//     this.price = initialPrice;
//     this.history = [];
//     this.volatility = volatility;
//     this.quantity = 0;
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
//     noFill();
//     stroke(200);
//     strokeWeight(1);
//     rect(x, y, width, height);
//   }
// }

// class buttons {
//   constructor(label, x, y, width, height, onClick) {
//     this.label = label;
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.onClick = onClick;
//   }

//   display() {
//     fill(150);
//     rect(this.x, this.y, this.width, this.height);
//     fill(255);
//     textSize(12);
//     textAlign(CENTER, CENTER);
//     text(this.label, this.x + this.width / 2, this.y + this.height / 2);
//   }

//   isClicked(mouseX, mouseY) {
//     return mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height;
//   }
// }

// class User {
//   constructor() {
//     this.balance = 1000;
//     this.holdings = [];
//   }

//   buyStock(stock, quantity) {
//     let totalCost = stock.price * quantity;
//     if (this.balance >= totalCost) {
//       this.balance -= totalCost;
//       if (!this.holdings.includes(stock)) {
//         stock.quantity = 0;
//         this.holdings.push(stock);
//       }
//       stock.quantity += quantity;
//       return true; // Buy successful
//     } else {
//       return false; // Insufficient funds
//     }
//   }

//   sellStock(stock, quantity) {
//     if (stock.quantity >= quantity) {
//       this.balance += stock.price * quantity;
//       stock.quantity -= quantity;
//       if (stock.quantity === 0) {
//         this.holdings = this.holdings.filter((s) => s !== stock);
//       }
//       return true; // Sell successful
//     } else {
//       return false; // Insufficient stocks to sell
//     }
//   }

//   calculatePortfolioValue() {
//     return this.holdings.reduce((total, stock) => total + stock.price * stock.quantity, 0);
//   }
// }

// let marcedesBenc = new Stock("Marcedes-Benc", 100, 2);
// let dmw = new Stock("DMW", 80, 3);
// let mykrosofft = new Stock("Mykrosofft", 120, 2.5);
// let tassla = new Stock("Tassla", 150, 4);
// let amason = new Stock("Amason", 180, 5);
// let bojieng = new Stock("Bojieng", 90, 2.2);

// let stocks = [marcedesBenc, dmw, mykrosofft, tassla, amason, bojieng];
// let user;

// let buyButtons = [];
// let sellButtons = [];

// function setup() {
//   // createCanvas(windowWidth, windowHeight);
//   user = new User();

//   // Set interval for stock price updates (every day)
//   // setInterval(updateStockPrices, 1000); // 1000 milliseconds = 1 second

//   // Initialize buttons
//   for (let i = 0; i < stocks.length; i++) {
//     let rowNum = floor(i / 2);
//     let colNum = i % 2;

//     let buyButtonX = 20 + colNum * (width / 2 + 20);
//     let sellButtonX = 20 + colNum * (width / 2 + 20) + 60 + 5;
//     let buttonY = 30 + rowNum * (height / 3) + (height / 3) - 20;

//     let buyButton = new Button("Buy", buyButtonX, buttonY, 60, 20, () => buyStockPrompt(stocks[i]));
//     let sellButton = new Button("Sell", sellButtonX, buttonY, 60, 20, () => sellStockPrompt(stocks[i]));

//     buyButtons.push(buyButton);
//     sellButtons.push(sellButton);
//   }
// }

// function draw() {
//   background(240); // Lighter background

  // // Display stock information and draw graphs with 2 stocks on each row
  // let numRows = 3;
  // let numCols = 2;
  // let xOffset = 20;
  // let yOffset = 30;

  // let cellWidth = (width - (numCols + 1) * xOffset) / numCols;
  // let cellHeight = (height - yOffset) / numRows;

  // for (let i = 0; i < stocks.length; i++) {
  //   let rowNum = floor(i / numCols);
  //   let colNum = i % numCols;

  //   let stock = stocks[i];

  //   // Display stock information
  //   textSize(14); // Smaller text size
  //   fill(50); // Darker text color
  //   text(`${stock.name} Price: $${stock.price.toFixed(2)}`, xOffset + colNum * (cellWidth + xOffset), yOffset + rowNum * cellHeight + 15);

  //   // Display user balance
  //   text(`User Balance: $${user.balance.toFixed(2)}`, xOffset + colNum * (cellWidth + xOffset), yOffset - 10);

  //   // Draw stock price graph
  //   stock.drawGraph(
  //     xOffset + colNum * (cellWidth + xOffset),
  //     yOffset + 20 + rowNum * cellHeight,
  //     cellWidth,
  //     cellHeight - 20
  //   );

  //   // Draw Buy and Sell buttons
  //   buyButtons[i].display();
  //   sellButtons[i].display();
  // }

  // // Display user's current holdings and portfolio value
  // textSize(16);
  // fill(50); // Darker text color
  // text("Portfolio:", xOffset, height - 60);
  // for (let i = 0; i < user.holdings.length; i++) {
  //   let holding = user.holdings[i];
  //   text(`${holding.name}: ${holding.quantity} stocks - Value: $${(holding.price * holding.quantity).toFixed(2)}`, xOffset, height - 30 - i * 30);
  // }
  // text(`Total Portfolio Value: $${user.calculatePortfolioValue().toFixed(2)}`, xOffset, height - 10);
// }


class Stock {
  constructor(name, initialPrice, volatility) {
    this.name = name;
    this.price = initialPrice;
    this.history = [];
    this.volatility = volatility;
    this.quantity = 0;
  }

  updatePrice() {
    // Simulate a random walk model
    let randomChange = randomGaussian(0, this.volatility);
    this.price += randomChange;

    // Ensure the price doesn't go negative
    this.price = max(this.price, 0);

    // Store the current stock price in the history array
    this.history.push(this.price);

    // Trim the history array to keep only the last 30 values
    if (this.history.length > 30) {
      this.history.shift();
    }
  }

  drawGraph(x, y, width, height) {
    // Draw the stock price graph
    noFill();
    stroke(0, 0, 255);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < this.history.length; i++) {
      let graphX = map(i, 0, this.history.length - 1, x, x + width);
      let graphY = map(this.history[i], min(this.history), max(this.history), y + height, y);
      vertex(graphX, graphY);
    }
    endShape();

    // Draw graph border
    noFill();
    stroke(200);
    strokeWeight(1);
    rect(x, y, width, height);
  }
}

class buttons {
  constructor(label, x, y, width, height, onClick) {
    this.label = label;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.onClick = onClick;
  }

  display() {
    fill(150);
    rect(this.x, this.y, this.width, this.height);
    fill(255);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(this.label, this.x + this.width / 2, this.y + this.height / 2);
  }

  isClicked(mouseX, mouseY) {
    return mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height;
  }
}

class User {
  constructor() {
    this.balance = 1000;
    this.holdings = [];
  }

  buyStock(stock, quantity) {
    let totalCost = stock.price * quantity;
    if (this.balance >= totalCost) {
      this.balance -= totalCost;
      if (!this.holdings.includes(stock)) {
        stock.quantity = 0;
        this.holdings.push(stock);
      }
      stock.quantity += quantity;
      return true; // Buy successful
    } else {
      return false; // Insufficient funds
    }
  }

  sellStock(stock, quantity) {
    if (stock.quantity >= quantity) {
      this.balance += stock.price * quantity;
      stock.quantity -= quantity;
      if (stock.quantity === 0) {
        this.holdings = this.holdings.filter((s) => s !== stock);
      }
      return true; // Sell successful
    } else {
      return false; // Insufficient stocks to sell
    }
  }

  calculatePortfolioValue() {
    return this.holdings.reduce((total, stock) => total + stock.price * stock.quantity, 0);
  }
}