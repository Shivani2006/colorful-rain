var drop;
var rain = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  for(var i = 0 ; i < windowWidth ; i++){
    drop = new Drop (random(0,width),random(0,height));
    rain.push(drop);
  }
  
  }

function draw() {
  background(0);  

  for(var i = 0;i<rain.length;i++){
    rain[i].display();
    rain[i].fall();
  }
  
  }