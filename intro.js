
function drawIntro()
{
  fill(255);
  const margem_bot = 50;
  const textWidth = width-100;
  const tamanho_menor = 20;
  const tamanho_maior = 70;
  const tamanho_menor_2 = 15;
  const tamanho_maior_2 = 80;
  const tamanho_txt_calculado = map (width, 350, 6000, tamanho_menor, tamanho_maior);
  const tamanho_txt_restringido = constrain(tamanho_txt_calculado, tamanho_menor, tamanho_maior);
  const tamanho_txt_calculado_2 = map (width, 350, 6000, tamanho_menor_2, tamanho_maior_2);
  const tamanho_txt_restringido_2 = constrain(tamanho_txt_calculado_2, tamanho_menor_2, tamanho_maior_2);
  
  textFont(header);
  textSize (tamanho_txt_restringido_2);
  textAlign (CENTER);
  textWrap (WORD);
  text("The Relationship of Rainfall and Ambient Temperature.", width/2, 50, textWidth);
  
  textFont(font);
  textSize(tamanho_txt_restringido/1.7);
  textAlign(CENTER, CENTER);
  textWrap (WORD);
  text("Our idea with this project was to verify a popular wisdom that says that when there are rainy days the environmental temperature is mild. That is, if we were to verify that in a year when there was no rain in a certain region there would be a discrepancy in average annual temperatures, both positive and negative, one would be very hot and the other very low, and if we compared the same place in another year when it rained the temperature would be mild, with the average annual high temperature and average annual low temperature very close.  With the same project we can also if it is true that it rains less these days or if Portugal in certain locations has always been consistent with rainy days.  To search and compare the data just click on the button, where you will be linked to another page and you can select the location and check the rainy days, average annual temperatures and see for yourselves if you see that rain tempers the environment. ", width/2, height/2, textWidth);
  
  let nxt_scene_btn_x = width/2;
  let nxt_scene_btn_y = height-margem_bot;
  let nxt_scene_btn_w = 200;
  let nxt_scene_btn_h = 30;
  
  rectMode(CENTER);
  noStroke();
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);
  
  fill(0)
  text("Ver Mais!", width/2, height-margem_bot);
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
