let tabela_01, tabela_02, tabela_03, os_meus_elementos, sel, quadrante, bg, scene, mouseIsReleased, font, font_2;


function preload()
{
  tabela_01 = loadTable("Tabelas_site_chuva.csv", "csv", "header");
  tabela_02 = loadTable("Tabelas_site_media_minimas.csv", "csv", "header");
  tabela_03 = loadTable("Tabelas_site_media_maximas.csv", "csv", "header");
  font = loadFont ("IBMPlexMono-Regular.ttf");
  font_2 = loadFont ("IBMPlexMono-ExtraLight.ttf");
}

function createSelectBox()
{
  let w = width;
  let h = height;
  let margem = 136;
  quadrante = 100;
  sel = createSelect();
  sel.position(CENTER, quadrante*2);
  
  sel.option("");
  sel.option("Viana do Castelo", "viana_do_castelo");
  sel.option("Bragança", "braganca");
  sel.option("Porto", "porto");
  sel.option("Castelo Branco", "castelo_branco");
  sel.option("Lisboa", "lisboa");
  sel.option("Beja", "beja");
  sel.option("Faro", "faro");
  sel.option("Funchal", "funchal");
  sel.option("Angra do Heroísmo", "angra_do_heroismo");
  
  sel.changed(importData);
  
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('img/azul.jpg'); 
  os_meus_elementos = [];
  createSelectBox();
  scene = 1;
  mouseIsReleased = true;
}


function draw() 
{
  background(30);
  if (scene === 1) drawIntro();
  else 
  if (scene === 2) drawData();
}

function mouseReleased() 
{
  mouseIsReleased = true;
}

function windowResized()
{
  resizeCanvas (windowWidth, windowHeight);

}

