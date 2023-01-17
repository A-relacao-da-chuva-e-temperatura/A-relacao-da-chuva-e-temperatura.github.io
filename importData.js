function importData()// função que le as tabelas e importa os dados
{ 
  for (let r=0; r<tabela_01.getRowCount(); r++)// calculo para ler cada linha da tabela
  {
    //leitura de dados
    const ano   = tabela_01.getString (r, "anos");
    const chuva = tabela_01.getNum (r, sel.value());
    const min   = tabela_02.getNum (r, sel.value());
    const max   = tabela_03.getNum (r, sel.value());
    
    os_meus_elementos[r] = new DataElement (ano, chuva, min, max);// guardar dados e construir uma class
  }
  
  import_data_realizado = true;// confirmação que os dados foram importados
}
