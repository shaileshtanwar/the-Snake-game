var myCanvas;
var snake;
var food;
var scl = 10;
function setup() 
{
	myCanvas = createCanvas(600, 400);
  	myCanvas.parent('myContainer');
  	snake = new Snake();
  	frameRate(5);
  	pickLocation();
}

function draw() 
{
	background(51);

	if (snake.eat(food)) {
    pickLocation();
  }
  	snake.death();
	snake.update();
	snake.show();	
	fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		snake.dir(0,-1);
	}
	else if(keyCode === DOWN_ARROW)
	{
		snake.dir(0,1);
	}
	else if(keyCode === RIGHT_ARROW)
	{
		snake.dir(1,0);
	}
	else if(keyCode === LEFT_ARROW)
	{
		snake.dir(-1,0);
	}
}

