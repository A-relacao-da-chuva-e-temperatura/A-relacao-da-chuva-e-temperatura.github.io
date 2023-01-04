

function drawIntro(){
  fill(255);
  if(windowWidth>200){
  textSize(30);
  textAlign(CENTER);
  textFont(font);
  text("Titulo do projeto", windowWidth/2, 50);
  textSize(15);
  textAlign(CENTER);
  text("Topico 1 \nTopico 2 \nTopico 3 \nTopico 4 \nTopico 5 \nTopico 6 \nTopico 7 \nTopico 8 \nTopico 9 \nTopico 10", windowWidth/2, 100);
  }
    if(windowWidth>600){
      clear();
  textSize(40);
  textAlign(CENTER);
  text("Titulo do projeto", windowWidth/2, 50);
  textSize(17);
  textAlign(CENTER);
  text("Topico 1 \nTopico 2 \nTopico 3 \nTopico 4 \nTopico 5 \nTopico 6 \nTopico 7 \nTopico 8 \nTopico 9 \nTopico 10", windowWidth/2, 100);
  }
  if(windowWidth>1000){
    clear();
  textSize(60);
  textAlign(CENTER);
  text("Titulo do projeto", windowWidth/2, 70);
  textSize(20);
  textAlign(CENTER);
  text("Topico 1 \nTopico 2 \nTopico 3 \nTopico 4 \nTopico 5 \nTopico 6 \nTopico 7 \nTopico 8 \nTopico 9 \nTopico 10", windowWidth/2, 120);
  }
  fallingBall();
  
  let nxt_scene_btn_x = width/2;
  let nxt_scene_btn_y = height/2;
  let nxt_scene_btn_w = 200;
  let nxt_scene_btn_h = 50;
  rectMode(CENTER);
  noStroke();
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);
  
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
  {
    scene = 2;
    mouseIsReleased = false;
    rectMode(CORNER);
  }
}