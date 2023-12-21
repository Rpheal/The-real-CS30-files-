// Business Simulator
// Rapheal Oki & Alvin Shen
// 12/11/2023
//
// Extra for Experts:
// -

let score = 0; let balance = 10000; let stockPrice = 100;
let stocksOwned = 0; let buyStockButton; let sellStockButton;


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(32);

// Menu
// Initialization of the Menubuttons and properties styling included 
  fill(250);
  
  menuButton1 = new Button({
    x: width / 13,	y: 100,
		width: 100,		height: 50, // properties of the button
		content: 'Home',
		on_press() {
      buyStock();
		}
  });
  menuButton1.style("default", {background: '#00C2D1', color: '#fff'});
  menuButton1.style("hover", {
    background: 'F4FAFF',
    color: '#06f'
  })

  menuButton2 = new Button({
    x: width / 13,	y: 300,
		width: 100,		height: 50, // properties of the button
		content: 'Stock',
		on_press() {
      buyStock();
		}
  });
  menuButton2.style("default", {background: '#00C2D1', color: '#fff'});
  menuButton2.style("hover", {
    background: 'F4FAFF',
    color: '#06f'
  })

  menuButton3 = new Button({
    x: width / 13,	y: 500,
		width: 100,		height: 50, // properties of the button
		content: 'Business',
		on_press() {
      buyStock();
		}
  });
  menuButton3.style("default", {background: '#00C2D1', color: '#fff'});
  menuButton3.style("hover", {
    background: '#F4FAFF',
    color: '#06f'
  })

  menuButton4 = new Button({
    x: width / 13,	y: 700,
		width: 100,		height: 50, // properties of the button
		content: 'Profile',
		on_press() {
      buyStock();
		}
  });
  menuButton4.style("default", {background: '#00C2D1', color: '#fff'});
  menuButton4.style("hover", {
    background: '#F4FAFF',
    color: '#06f'
  })

  menuButton5 = new Button({
    x: width / 13,	y: 900,
		width: 100,		height: 50, // properties of the button
		content: 'Ranking',
		on_press() {
      buyStock();
		}
  });
  menuButton5.style("default", {background: '#00C2D1', color: '#fff'});
  menuButton5.style("hover", {
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
  background('#90BDDF');
  fill(0);
  displayInfo();
  text(`Money: ${score}`, width / 2, height / 2);
  sellStockButton.draw();
  buyStockButton.draw();
  fill('#122C3F');
  rect(0,0,width/10, height, 0, 20, 20, 0);
  menuButton1.draw();
  menuButton2.draw();
  menuButton3.draw();
  menuButton4.draw();
  menuButton5.draw();
  
  
  // Button
  fill(150, 200, 255);
  rectMode(CORNER);
  rect(width / 2 - 80, height / 2 + 50, 160, 50, 15);
  fill(0);
  text("Click me!", width / 2, height / 2 + 75);
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

