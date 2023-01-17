function createSelectBox()//criação da select box
{
  sel = createSelect();
  
  const w = width/3;
  sel.size (w, 20);//tamanho da select box
  sel.position (width/2-w/2, quadrante);//posição da select box
  
  //opções de escolha da select box (cada uma vai buscar os seus respetivos dados)
  sel.option("Select an option");
  sel.option("Viana do Castelo", "viana_do_castelo");
  sel.option("Bragança", "braganca");
  sel.option("Porto", "porto");
  sel.option("Castelo Branco", "castelo_branco");
  sel.option("Lisboa", "lisboa");
  sel.option("Beja", "beja");
  sel.option("Faro", "faro");
  sel.option("Funchal", "funchal");
  sel.option("Angra do Heroísmo", "angra_do_heroismo");
  
  sel.changed(importData);//vai buscar a visualização do gráfica e desenhar
  select_criado = true;
}


function legenda() //função que desenha a legenda
{
  const margem_y = 20;//margem da legenda
    fill(7, 68, 88);//cor do quadrado da primeira linha da legenda
    rect(width/2-110,legenda_y+margem_y-2,10);//quadrado da primeira linha da legenda
    fill(255);//cor do texto da primeira linha da legenda
    text("Days without rain",width/2-22,legenda_y+margem_y);//texto da primeira linha da legenda
    fill(58, 189, 234);//cor do quadrado da segunda linha da legenda
    rect(width/2-110,legenda_y+margem_y+16,10);//quadrado da segunda linha da legenda
    fill(255);//cor do texto da segunda linha da legenda
    text("Minimum average temperature",width/2+20,legenda_y+margem_y+18);//texto da segunda linha da legenda
    fill(210, 65, 29);//cor do quadrado da teceira linha da legenda
    rect(width/2-110,legenda_y+margem_y+34,10);//quadrado da terceira linha da legenda
    fill(255);//cor do texto da terceira linha da legenda
    text("Maximum average temperature",width/2+20,legenda_y+margem_y+36);//cor do texto da terceira linha da legenda
  }


function draw_help()//função para desenhar literalmente nada quando chamada
{
}


function vis() //função que desenha a 2ª cena do trabalho
{
  //verificar se o select criado é falso e desenhar se for
  if (select_criado === false)
    createSelectBox();
  
  //verificar se o import data é falso, se for desennha o drawhelp (nada), para tapar os dados
  if (import_data_realizado === false)
    draw_help();
  else 
  {
    drawData();//gráficos
    legenda();//legenda dos gráficos

  const margem_bot = 50;//margem inferior do botão
  
  //dimensões do botão
  let nxt_scene_btn_x = width/2-100;
  let nxt_scene_btn_y = height-margem_bot-15;
  let nxt_scene_btn_w = 200;
  let nxt_scene_btn_h = 30; 
    
  rectMode(CORNER);// modo de retangulo centrado
  noStroke();//não tem contorno
  rect (nxt_scene_btn_x, nxt_scene_btn_y, nxt_scene_btn_w, nxt_scene_btn_h);//criação do botão
  
  fill(0)//cor do texto dentro do botão
  text("Conclusion!", width/2, height-margem_bot-2);//texto dentro do botão
  //cálculo da area clicavel do botão
  if (mouseX > nxt_scene_btn_x-nxt_scene_btn_w/2 && 
      mouseX < nxt_scene_btn_x+nxt_scene_btn_w/2+100 && 
      mouseY > nxt_scene_btn_y-nxt_scene_btn_h/2 && 
      mouseY < nxt_scene_btn_y+nxt_scene_btn_h/2+15 && 
      mouseIsPressed === true && 
      mouseIsReleased === true)
  {
    scene = 3;//quando o botão é clicado vai para a terceira cena
    mouseIsReleased = false;
    rectMode(CORNER);
  }
  }
}

