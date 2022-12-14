var yposition = 0;
var xposition = 50;


function fallingBall(r,g,b){

  yposition++
  
  noStroke()
  fill(96, 146, 196)

  triangle(xposition-5,yposition,xposition+5,yposition,xposition,yposition-20)
  ellipse(xposition,yposition,10,10);
  
  yposition = yposition + 8;
  
  if (yposition > windowHeight){
  yposition = 0;
  xposition = random(windowWidth);
   
}
}  

