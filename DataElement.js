class DataElement
{
  constructor (ano, chuva, min, max)
  {
    this.ano = ano;
    this.chuva = chuva;
    this.min = min;
    this.max = max;
    
    this.barra_w = 20;
    this.barra_h = 100; //max
    
    this.grafico_barras_w = this.barra_w*3;
    this.grafico_barras_h = this.barra_h;
  }
  
  
  drawDataElement (x, y)
  {
    //console.log (this.ano, this.chuva, this.min, this.max);
    fill(0,255,0);
    rect (x+this.barra_w*0, y, this.barra_w, map(this.chuva, 0, 365, 0, this.barra_h) *-1);
    
    fill(0,0,255);
    rect (x+this.barra_w*1, y, this.barra_w, map(this.min, -20, 60, 0,  this.barra_h) *-1);
    fill(255,0,0);
    rect (x+this.barra_w*2, y, this.barra_w, map(this.max, -20, 60, 0,  this.barra_h) *-1);
    fill(255);
    textSize(14);
    text (this.ano, x+15, y+15);
     fill(0,255,0);
    rect(30,530,10);
    fill(255);
    text("Dias sem chuva",110,540);
    fill(0,0,255);
    rect(30,550,10);
    fill(255);
    text("Temperatura média mínima",152,560);
    fill(255,0,0);
    rect(30,570,10);
    fill(255);
    text("Temperatura média máxima",152,580);
  }
}