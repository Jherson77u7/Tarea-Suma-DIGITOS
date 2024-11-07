
function promedio(cant) {
    let totalAcumulado = 0;
    let contador = cant.length;
  
    for (let i = 0; i < cant.length; i++) {
      totalAcumulado += cant[i];

    }
  
    return totalAcumulado ;
   
  }
  export default promedio ;
    