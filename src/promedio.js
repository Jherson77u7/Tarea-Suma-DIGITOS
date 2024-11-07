// let cant=[];

// function promedio (cant)
// {
//     let totalAcumulado=0;
//     let contador=0;
//     let resultadoPromedio=0;
//     let Numero=obtenerNumero(numero);
//     for (let i=0;i<cant;i++)
//     {
//          totalAcumulado +=cant[i].Numero;
//          contador++;
         
//     }
//     return resultadoPromedio/contador;
// }
function promedio(cant) {
    let totalAcumulado = 0;
    let contador = cant.length;
  
    for (let i = 0; i < cant.length; i++) {
      totalAcumulado = cant[i];
      
    }
  
    let resultadoPromedio = totalAcumulado ;
    return resultadoPromedio;
  }
  export default promedio ;
    