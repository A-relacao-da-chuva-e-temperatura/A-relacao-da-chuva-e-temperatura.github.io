function drawData()
{
  
  if (os_meus_elementos.length > 0) 
  {
    const w_cada_graf = os_meus_elementos[0].grafico_barras_w;
    const h_cada_graf = os_meus_elementos[0].grafico_barras_h;
    const m_cada_graf = w_cada_graf/5;
    
    const m_galeria = 50;
    
    let w_galeria = 0;
    if (width > 1000 ) w_galeria = width/2-(m_galeria*2);
    else w_galeria = width-(m_galeria*2);
    
    const num_colunas_galeria = floor( w_galeria/(w_cada_graf+m_cada_graf) );
    const num_linhas_galeria = ceil(tabela_01.getRowCount()/num_colunas_galeria);
    
    const x_galeria = width/2- w_galeria/2 + m_cada_graf*1.5;
          
          //(num_colunas_galeria*(w_cada_graf+m_cada_graf))/2 + m_cada_graf/2;
    const y_galeria = quadrante*2;
    
    
    //console.log ( floor( w_galeria/w_cada_graf ) );
    
    let i = 0;
    for (let l=0; l<num_linhas_galeria; l++) 
    {
      for (let c=0; c<num_colunas_galeria; c++) 
      {
        
        os_meus_elementos[i].drawDataElement 
        (
          x_galeria+c*(w_cada_graf+m_cada_graf), 
          y_galeria+l*h_cada_graf + h_cada_graf
        );
        
        legenda_y = y_galeria+l*h_cada_graf + h_cada_graf;

        if (i<os_meus_elementos.length-1) i++;
        else break;
        
      }
    }
    
  }
}
