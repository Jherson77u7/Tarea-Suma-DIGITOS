
function promedio(cant) {
    let totalAcumulado = 0;
    let numeroMaximo=1000;
    let contador = cant.length;
  
    for (let i = 0; i < cant.length; i++) {
      totalAcumulado += cant[i];

      if (cant[i]<=numeroMaximo)
      {
        totalAcumulado += cant[i];
      }
  
    }
  
    return totalAcumulado ;
   
  }
  export default promedio ;
    