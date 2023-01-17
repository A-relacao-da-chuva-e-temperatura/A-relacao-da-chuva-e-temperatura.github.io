class DataElement // uso de uma class já criada no importData
{
  constructor (ano, chuva, min, max) //criação de novos objetos
  {
    // chamar os objetos do constructor e dizer que eles são iguais aos dados do importData
    this.ano = ano;
    this.chuva = chuva;
    this.min = min;
    this.max = max;
    
    this.ano_txt = 18; //tamanho do texto dos anos
    
    /*se a largura da barra_w for maior que 500, ela tem 25 de largura,
    mas se for menor, ela tem 15 de largura*/
    if (width > 500 ) this.barra_w = 25;
    else this.barra_w = 15;
    
    this.barra_h = 100; //altura máxima da barra_h
    
    //grafico_barras_w tem uma largura 3 barras_w, dái o barras_w*3
    this.grafico_barras_w = this.barra_w*3;
    
    /*grafico_barras_h tem uma altura de 1 barra_h mais o ano_txt (neste caso será a altura), 
    dái o barras_h + ano_txt*/
    this.grafico_barras_h = this.barra_h + this.ano_txt;
  }
  
  /* elemento que vai criar o estilo de cada barra, tanto da chuva,
  temperatura minima ou maxima.*/
  drawDataElement (x, y)
  {
    
    fill(7, 68, 88);// cor da chuva (barra mais à esquerda do grupo)
    rect (x+this.barra_w*0, y-this.ano_txt, this.barra_w, map(this.chuva, 0, 365, 0, this.barra_h) *-1);// retângulo da chuva (barra mais à esquerda do grupo)
    
    fill(58, 189, 234);// cor da mínima (barra a meio do grupo)
    rect (x+this.barra_w*1, y-this.ano_txt, this.barra_w, map(this.min, -20, 60, 0,  this.barra_h) *-1);// retângulo da mínima (barra a meio do grupo)
    
    fill(210, 65, 29);// cor da máxima (barra mais à direita do grupo)
    rect (x+this.barra_w*2, y-this.ano_txt, this.barra_w, map(this.max, -20, 60, 0,  this.barra_h) *-1);// retângulo da máxima (barra mais à direita do grupo)
    
    fill(255);// cor do texto da legenda
    textSize(this.ano_txt-4);//tamanho do texto
    textAlign (CENTER, CENTER)//alinhamento do texto
    text (this.ano, x, y-this.ano_txt, this.grafico_barras_w, this.ano_txt);//texto a ser escrito e posição do texto
  }
}

