function drawData()
{
  if (os_meus_elementos.length > 0) 
  {
    const w = os_meus_elementos[0].grafico_barras_w;
    const h = os_meus_elementos[0].grafico_barras_h;
    
    const num_colunas = int(width/w)-3;
    const num_linhas = ceil(tabela_01.getRowCount()/num_colunas);
    
    //console.log (num_colunas);
    
    let i = 0;
    for (let l=0; l<num_linhas; l++) 
    {
      for (let c=0; c<num_colunas; c++) 
      {
        os_meus_elementos[i].drawDataElement (c*(w+w/5)+w/2, quadrante*4+l*h+h);

        if (i < os_meus_elementos.length-1) i++;
        else break;
      }
    }
  }
  
}