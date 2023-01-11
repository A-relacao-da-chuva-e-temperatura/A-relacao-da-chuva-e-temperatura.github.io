class DataElement
{
  constructor (ano, chuva, min, max)
  {
    this.ano = ano;
    this.chuva = chuva;
    this.min = min;
    this.max = max;
    
    this.ano_txt = 18;
    
    if (width > 500 ) this.barra_w = 25;
    else this.barra_w = 15;
    
    this.barra_h = 100; //max
    
    this.grafico_barras_w = this.barra_w*3;
    this.grafico_barras_h = this.barra_h + this.ano_txt;
  }
  
  
  drawDataElement (x, y)
  {
    /*
    fill (255, 0, 255);
    rect (x, y, this.grafico_barras_w, -this.grafico_barras_h);
    */
    
    //console.log (this.ano, this.chuva, this.min, this.max);
    
    fill(7, 68, 88);
    rect (x+this.barra_w*0, y-this.ano_txt, this.barra_w, map(this.chuva, 0, 365, 0, this.barra_h) *-1);
    
    fill(58, 189, 234);
    rect (x+this.barra_w*1, y-this.ano_txt, this.barra_w, map(this.min, -20, 60, 0,  this.barra_h) *-1);
    
    fill(210, 65, 29);
    rect (x+this.barra_w*2, y-this.ano_txt, this.barra_w, map(this.max, -20, 60, 0,  this.barra_h) *-1);
    
    fill(255);
    textSize(this.ano_txt-4);
    textAlign (CENTER, CENTER)
    text (this.ano, x, y-this.ano_txt, this.grafico_barras_w, this.ano_txt);
  }
}

