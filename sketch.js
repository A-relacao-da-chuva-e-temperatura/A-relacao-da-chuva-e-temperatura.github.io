/*
Rafael Canejo, Nº3200711
Ana Pereira, Nº3200727
Pedro Ferreira, Nº3200354
Nome enunciado: Perspectivas
Ano Letivo: 3º. 2022-2023
Semestre: 1º
Laboratório de Projeto I
Design Gráfico e Multimédia (ramo multimédia)
Escola Superior de Artes e Design, Caldas da Rainha (ESAD.CR)
Professor: Marco Heleno
Último momento de avaliação: 14 de Dezembro de 2022
*/

let tabela_01, tabela_02, tabela_03, os_meus_elementos, sel, scene, mouseIsReleased, font, header, select_criado, quadrante, import_data_realizado, legenda_y, divisoes_4, img;//variaveis


function preload()
{
  //importação de tabelas
  tabela_01 = loadTable("Tabelas_site_chuva.csv", "csv", "header");
  tabela_02 = loadTable("Tabelas_site_media_minimas.csv", "csv", "header");
  tabela_03 = loadTable("Tabelas_site_media_maximas.csv", "csv", "header");
  //importação de fonts
  font = loadFont ("IBMPlexMono-Regular.ttf");
  header = loadFont ("IBMPlexMono-Bold.ttf");
}

function setup()
{
  // dar valores e definições a algumas variaveis no setup no setup
  createCanvas(windowWidth, windowHeight);
  
  os_meus_elementos = [];
  scene = 1;//cena inicial
  mouseIsReleased = true;
  select_criado = false;
  import_data_realizado = false;
  quadrante = 70;
  textFont(font);
  divisoes_4 = width/4;
}


function draw() // função que desenha principal (vai buscar as outras funções e desenha aqui)
{
  background(30);//cor de fundo
  
  //as duas simulações de chuva
  fallingBall();
  fallingBall2();
  
  //if's para perceber qual cena ir buscar de acordo com cada calculo dos botões
  if (scene === 1) drawIntro();
  else 
  if (scene === 2) vis();
  else
  if (scene === 3) conclusao();
}

function mouseReleased() 
{
  mouseIsReleased = true;
}

function windowResized()
{
  resizeCanvas (windowWidth, windowHeight);
  if (select_criado === true) 
  {
    //apagar a select box para nao aparecer na primeira cena
    sel.remove();
    createSelectBox();
  }
}
