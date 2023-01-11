function createSelectBox()
{
  sel = createSelect();
  
  const w = width/3;
  sel.size (w, 20);
  sel.position (width/2-w/2, quadrante);
  
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
  
  sel.changed(importData);
  select_criado = true;
}


function legenda() 
{
  const margem_y = 20;
  fill(7, 68, 88);
    rect(width/2-110,legenda_y+margem_y-2,10);
    fill(255);
    text("Days without rain",width/2-22,legenda_y+margem_y);
    fill(58, 189, 234);
    rect(width/2-110,legenda_y+margem_y+16,10);
    fill(255);
    text("Minimum average temperature",width/2+20,legenda_y+margem_y+18);
    fill(210, 65, 29);
    rect(width/2-110,legenda_y+margem_y+34,10);
    fill(255);
    text("Maximum average temperature",width/2+20,legenda_y+margem_y+36);
  }
/*0,255,0
0,0,255
255,0,0*/

function draw_help()
{
}


function vis() 
{
  if (select_criado === false)
    createSelectBox();
  
  if (import_data_realizado === false)
    draw_help();
  else 
  {
    drawData();
    legenda();
  }
}

