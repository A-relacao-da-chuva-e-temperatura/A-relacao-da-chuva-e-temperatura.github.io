let tabela_01, tabela_02, tabela_03, os_meus_elementos, sel, scene, mouseIsReleased, font, header, select_criado, quadrante, import_data_realizado, legenda_y, divisoes_4;


function preload()
{
  tabela_01 = loadTable("Tabelas_site_chuva.csv", "csv", "header");
  tabela_02 = loadTable("Tabelas_site_media_minimas.csv", "csv", "header");
  tabela_03 = loadTable("Tabelas_site_media_maximas.csv", "csv", "header");
  
  font = loadFont ("IBMPlexMono-Regular.ttf");
  header = loadFont ("IBMPlexMono-Bold.ttf");
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  
  os_meus_elementos = [];
  scene = 1;
  mouseIsReleased = true;
  select_criado = false;
  import_data_realizado = false;
  quadrante = 70;
  textFont(font);
  divisoes_4 = width/4;
}


function draw() 
{
  background(30);
  fallingBall();
  fallingBall2();
  
  if (scene === 1) drawIntro();
  else 
  if (scene === 2) vis();
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
    sel.remove();
    createSelectBox();
  }
}
