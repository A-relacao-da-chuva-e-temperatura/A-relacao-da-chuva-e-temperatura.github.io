


function drawIntro()// função que desenha a 1ª cena do trabalho
{
  fill(255);//cor do texto
  const margem_bot = 50;//margem inferior do botão
  const textWidth = width-100;//largura máxima do texto
  // dimensões máximas e mínimas dos textos
  const tamanho_menor = 20;
  const tamanho_maior = 70;
  const tamanho_menor_2 = 15;
  const tamanho_maior_2 = 80;
  //calculs do tamanho do texto e restrições de tamanho
  const tamanho_txt_calculado = map (width, 350, 6000, tamanho_menor, tamanho_maior);
  const tamanho_txt_restringido = constrain(tamanho_txt_calculado, tamanho_menor, tamanho_maior);
  const tamanho_txt_calculado_2 = map (width, 350, 6000, tamanho_menor_2, tamanho_maior_2);
  const tamanho_txt_restringido_2 = constrain(tamanho_txt_calculado_2, tamanho_menor_2, tamanho_maior_2);
  
  textFont(header);//a mesma font de texto mas bold
  textSize (tamanho_txt_restringido_2);//tamanho do texto
  textAlign (CENTER);//Alinhamento do texto
  textWrap (WORD);// faz automaticamente quebras de linhas por palavras (daí o (WORD) dentro do seu limite definido)
  text("The Relationship of Rainfall and Ambient Temperature.", width/2, 50, textWidth);//titulo da página
  textFont(font);//voltar a font normal
  textSize(tamanho_txt_restringido/1.7);//tamanho do texto
  textAlign(CENTER, CENTER);//Alinhamento do texto
  textWrap (WORD);// faz automaticamente quebras de linhas por palavras (daí o (WORD) dentro do seu limite definido)
  text("This project seeks to explore the truth of the popular belief that rainy days lead to milder ambient temperatures. We will investigate if a year with no or minimal rain in a given region results in a difference in average annual temperatures, higher or lower, and if a year with precipitation produces more moderate temperatures. Furthermore, we will determine if rainfall has decreased over time or if Portugal still experiences consistent precipitation, even in its hottest and driest areas. \n\n (To search and compare the data, click the button to link to another page. From there, you can select a location and examine the rainy days, average annual temperatures, and determine if rain tempers the environment).  ", width/2, height/2, textWidth);//texto da introdução (texto central da página)
  
  //dimensões do botão
  let nxt_scene_btn_x = width/2;
  let nxt_scene_btn_y = height-margem_bot;
  let nxt_scene_btn_w = 200;
  let nxt_scene_btn_h = 30;
  
  rectMode(CENTER);// modo de retangulo centrado
  noStroke();//não tem contorno
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);//criação do botão
  
  fill(0)//cor do texto dentro do botão
  text("See More!", width/2, height-margem_bot-2);//texto dentro do botão
  //cálculo da area clicavel do botão
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
  {
    scene = 2;//quando o botão é clicado vai para a segunda cena
    mouseIsReleased = false;
    rectMode(CORNER);
  }
}
