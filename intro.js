function drawIntro(){
  fill(0);
  if(windowWidth>200){
  textSize(30);
  textAlign(CENTER);
  text("Titulo do projeto", windowWidth/2, 50);
  textSize(15);
  textAlign(CENTER);
  text("Topico 1 \nTopico 2 \nTopico 3 \nTopico 4 \nTopico 5 \nTopico 6 \nTopico 7 \nTopico 8 \nTopico 9 \nTopico 10", windowWidth/2, 100);
  }
    if(windowWidth>600){
      clear();
  background(255);
  textSize(40);
  textAlign(CENTER);
  text("Titulo do projeto", windowWidth/2, 50);
  textSize(17);
  textAlign(CENTER);
  text("Topico 1 \nTopico 2 \nTopico 3 \nTopico 4 \nTopico 5 \nTopico 6 \nTopico 7 \nTopico 8 \nTopico 9 \nTopico 10", windowWidth/2, 100);
  }
  if(windowWidth>1000){
    clear();
  background(255);
  textSize(60);
  textAlign(CENTER);
  text("Titulo do projeto", windowWidth/2, 70);
  textSize(20);
  textAlign(CENTER);
  text("Topico 1 \nTopico 2 \nTopico 3 \nTopico 4 \nTopico 5 \nTopico 6 \nTopico 7 \nTopico 8 \nTopico 9 \nTopico 10", windowWidth/2, 120);
  }
}