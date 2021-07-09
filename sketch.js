var r=0
var g=50
var b=255



function setup() {

  createCanvas(400,400);


  
  
  b1=createButton("BLUE")
  b1.position(5,60)
  b1.mousePressed(blue_bg) 

  
  b2=createButton("GREEN")
  b2.position(200,60)
  b2.mousePressed(green_bg);

}

function blue_bg() 
{
  r=2;
  g=50;
  b=255;
}

function green_bg() 
{
  r=0;
  g=255;
  b=0;
}

function draw()
{
  background(30);
}

