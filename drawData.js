function drawData()// função para desenhar a galeria de gráficos
{
  
  if (os_meus_elementos.length > 0) 
  {
    //dimensões de cada grupo de gráficos (as dimensões externas são iguais para todos)
    const w_cada_graf = os_meus_elementos[0].grafico_barras_w;
    const h_cada_graf = os_meus_elementos[0].grafico_barras_h;
    const m_cada_graf = w_cada_graf/5;
    
    const m_galeria = 50;// margem da galeria
    
    let w_galeria = 0;
    //ajuste das dimensões da galeria de acordo com o breakpoint inserido
    if (width > 1000 ) w_galeria = width/2-(m_galeria*2);
    else w_galeria = width-(m_galeria*2);
    
    // Calcula o valor int mais próximo que é inferior ou igual ao valor do parâmetro
    const num_colunas_galeria = floor( w_galeria/(w_cada_graf+m_cada_graf) );
    //Calcula o valor int mais próximo que é maior ou igual ao valor do parâmetro
    const num_linhas_galeria = ceil(tabela_01.getRowCount()/num_colunas_galeria);
    
    //posição da galeria
    const x_galeria = width/2- w_galeria/2 + m_cada_graf*1.5;      
    const y_galeria = quadrante*2;
    
    
    let i = 0;
    for (let l=0; l<num_linhas_galeria; l++) // calculo das linhas da gelria(ou tabela)
    {
      for (let c=0; c<num_colunas_galeria; c++) // calculo das colunas da galeria
      {
        
        os_meus_elementos[i].drawDataElement 
        (
          //calculo da quantidade e dimensões de cada grupo da galeria
          x_galeria+c*(w_cada_graf+m_cada_graf), 
          y_galeria+l*h_cada_graf + h_cada_graf
        );
        
        //altura da legenda do gráfico (acompanha o gráfico em termos de altura)
        legenda_y = y_galeria+l*h_cada_graf + h_cada_graf;

        if (i<os_meus_elementos.length-1) i++;
        else break;
        
      }
    }
    
  }
}
