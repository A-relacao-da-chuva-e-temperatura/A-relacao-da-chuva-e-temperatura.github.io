function conclusao()// função que desenha a 3ª cena do trabalho
{
  //remoção da select box quando passa para a 3 cena
  if (select_criado === true) 
  {
    sel.remove();
  }

  fill(255);  //cor do texto
  const margem_bot = 50;  //margem inferior do botão
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
  text("(Conclusion)", width/2, 100, textWidth);//sub-titulo da página
  
  textFont(font);//voltar a font normal
  textSize(tamanho_txt_restringido/1.7);//tamanho de texto
  textAlign(CENTER, CENTER);//alinhamento de texto
  textWrap (WORD);// faz automaticamente quebras de linhas por palavras (daí o (WORD) dentro do seu limite definido)
  text("The results of the data analysis suggest that the popular belief that rainy days lead to milder temperatures holds true in Portugal, with the average temperature remaining consistent over the last two decades despite a decrease in the amount of rainfall. This supports the notion that precipitation does indeed have a moderating effect on temperatures. We found that although there had been a decrease in the amount of rainfall, the average temperature was still consistent across the country.", width/2, height/2, textWidth);//texto da conclusão (texto central da página)
  
  fill(255);//cor
  //dimensões do botão
  let nxt_scene_btn_x = width/2;
  let nxt_scene_btn_y = height-margem_bot;
  let nxt_scene_btn_w = 200;
  let nxt_scene_btn_h = 30;
  
  rectMode(CENTER);// modo de retangulo centrado
  noStroke();//não tem contorno
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);//criação do botão
  
  fill(0)//cor do texto dentro do botão
  text("Back to start", width/2, height-margem_bot-2);//texto dentro do botão
  //cálculo da area clicavel do botão
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2 && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
  {
    scene = 1;//quando o botão é clicado volta para a primeira cena
    mouseIsReleased = false;
    rectMode(CORNER);
    select_criado = false;
  }
}