
function promedio(cant) {
    let totalAcumulado = 0;
    let numeroMaximo=1000;
    let contador =0;
  
    for (let i = 0; i < cant.length; i++) {
      

      if (cant[i]<=numeroMaximo)
        totalAcumulado += cant[i];
        contador++;
      
    
      

    }
  
    return totalAcumulado ;
   
  }
  export default promedio ;
    