var yposition = 0;
var xposition = 50;
var y2position = 0;
var x2position = 50;


function fallingBall(r,g,b){

  yposition++
  yposition++
  
  noStroke()
  fill(96, 146, 196)

  triangle(xposition-5,yposition,xposition+5,yposition,xposition,yposition-20)
  ellipse(xposition,yposition,10,10);
  
  yposition = yposition + 8;
  
  if (yposition > windowHeight){
  yposition = random(windowHeight);
  xposition = random(windowWidth);
   
}
}  

function fallingBall2(r,g,b){

  y2position++
  y2position++
  
  noStroke()
  fill(96, 146, 196)

  triangle(x2position-5,y2position,x2position+5,y2position,x2position,y2position-20)
  ellipse(x2position,y2position,10,10);
  
  y2position = y2position + 8;
  
  if (y2position > windowHeight){
  y2position = random(windowHeight);
  x2position = random(windowWidth);
   
}
} 

