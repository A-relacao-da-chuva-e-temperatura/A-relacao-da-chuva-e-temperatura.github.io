function importData()
{ 
  for (let r=0; r<tabela_01.getRowCount(); r++)
  {
    const ano   = tabela_01.getString (r, "anos");
    const chuva = tabela_01.getNum (r, sel.value());
    const min   = tabela_02.getNum (r, sel.value());
    const max   = tabela_03.getNum (r, sel.value());
    
    //console.log (ano, chuva, min, max);
    
    os_meus_elementos[r] = new DataElement (ano, chuva, min, max);
  }
  
  import_data_realizado = true;
}
