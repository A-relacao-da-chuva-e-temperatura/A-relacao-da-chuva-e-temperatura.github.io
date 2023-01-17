//posições
var yposition = 0;
var xposition = 50;
var y2position = 0;
var x2position = 50;


function fallingBall(r,g,b){//função que desenha e cria a simulação da chuva

  //velocidade da chuva
  yposition++
  yposition++

  
  noStroke()//sem contorno
  fill(96, 146, 196)//cor da chuva

  //criação da chuva com um triangulo e um circulo
  triangle(xposition-5,yposition,xposition+5,yposition,xposition,yposition-20);
  ellipse(xposition,yposition,10,10);
  
  yposition = yposition + 8;// margem de segurança da parte superior do ecrã
  
  /*calculo que faz com que quando a chuva chegue ao limite inferior do ecrã
  recrie a mesma chuva em outra posição completamente aleatória, tanto
  no eixo do x como do y*/
  if (yposition > windowHeight){
  yposition = random(windowHeight);
  xposition = random(windowWidth);
   
}
}  

function fallingBall2(r,g,b){/*função que desenha e cria a simulação da 
segunda chuva (criada para dar mais quantidade a chuva)*/ 

  //velocidade da chuva
  y2position++
  y2position++
  
  noStroke()//sem contorno
  fill(96, 146, 196)//cor da chuva

  //criação da chuva com um triangulo e um circulo
  triangle(x2position-5,y2position,x2position+5,y2position,x2position,y2position-20)
  ellipse(x2position,y2position,10,10);
  
  y2position = y2position + 8;// margem de segurança da parte superior do ecrã
  
  /*calculo que faz com que quando a chuva chegue ao limite inferior do ecrã
  recrie a mesma chuva em outra posição completamente aleatória, tanto
  no eixo do x como do y*/
  if (y2position > windowHeight){
  y2position = random(windowHeight);
  x2position = random(windowWidth);
   
}
} 

