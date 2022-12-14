function importData()
{
  //console.log (tabela_01.getRows());
  //console.log (tabela_01.get("faro"));
  //console.log (tabela_01.getColumnCount());
  //console.log (tabela_01.getRowCount());
  /*
  console.log 
  (
    tabela_01.getColumn("viana_do_castelo"), 
    tabela_02.getColumn("viana_do_castelo"), 
    tabela_03.getColumn("viana_do_castelo")
  );
  */
  
  
  for (let r=0; r<tabela_01.getRowCount(); r++)
  {
    const ano   = tabela_01.getString (r, "anos");
    const chuva = tabela_01.getNum (r, sel.value());
    const min   = tabela_02.getNum (r, sel.value());
    const max   = tabela_03.getNum (r, sel.value());
    
    //console.log (ano, chuva, min, max);
    
    os_meus_elementos[r] = new DataElement (ano, chuva, min, max);
  }
  
  
  /*
  for (let r=0; r<tabela_01.getRowCount(); r++)
  {
    //console.log (tabela_01.getRow(r));
    
    const year_1 = tabela_01.getString (r, "anos");
    const viana_do_castelo_1 = tabela_01.getNum (r, "viana_do_castelo");
    const braganca_1 = tabela_01.getNum (r, "braganca");
    const porto_1 = tabela_01.getNum (r, "porto");
    const castelo_branco_1 = tabela_01.getNum (r, "castelo_branco");
    const lisboa_1 = tabela_01.getNum (r, "lisboa");
    const beja_1 = tabela_01.getNum (r, "beja");
    const faro_1 = tabela_01.getNum (r, "faro");
    const funchal_1 = tabela_01.getNum (r, "funchal");
    const angra_do_heroismo_1 = tabela_01.getNum (r, "angra_do_heroismo");
    //console.log (angra_do_heroismo_1);
    
    //const year_2 = tabela_02.getString (r, "anos");
    const viana_do_castelo_2 = tabela_02.getNum (r, "viana_do_castelo");
    const braganca_2 = tabela_02.getNum (r, "braganca");
    const porto_2 = tabela_02.getNum (r, "porto");
    const castelo_branco_2 = tabela_02.getNum (r, "castelo_branco");
    const lisboa_2 = tabela_02.getNum (r, "lisboa");
    const beja_2 = tabela_02.getNum (r, "beja");
    const faro_2 = tabela_02.getNum (r, "faro");
    const funchal_2 = tabela_02.getNum (r, "funchal");
    const angra_do_heroismo_2 = tabela_02.getNum (r, "angra_do_heroismo");
    //console.log (angra_do_heroismo_2);
    
    //const year_3 = tabela_03.getString (r, "anos");
    const viana_do_castelo_3 = tabela_03.getNum (r, "viana_do_castelo");
    const braganca_3 = tabela_03.getNum (r, "braganca");
    const porto_3 = tabela_03.getNum (r, "porto");
    const castelo_branco_3 = tabela_03.getNum (r, "castelo_branco");
    const lisboa_3 = tabela_03.getNum (r, "lisboa");
    const beja_3 = tabela_03.getNum (r, "beja");
    const faro_3 = tabela_03.getNum (r, "faro");
    const funchal_3 = tabela_03.getNum (r, "funchal");
    const angra_do_heroismo_3 = tabela_03.getNum (r, "angra_do_heroismo");
    //console.log (angra_do_heroismo_3);
    
    os_meus_elementos[r] = new DataElement 
    (year_1, 
     viana_do_castelo_1, braganca_1, porto_1, castelo_branco_1, lisboa_1, beja_1, faro_1, funchal_1, angra_do_heroismo_1, 
     viana_do_castelo_2, braganca_2, porto_2, castelo_branco_2, lisboa_2, beja_2, faro_2, funchal_2, angra_do_heroismo_2, 
     viana_do_castelo_3, braganca_3, porto_3, castelo_branco_3, lisboa_3, beja_3, faro_3, funchal_3, angra_do_heroismo_3
    );
  }*/
  
  
}
