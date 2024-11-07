import promedio from "./promedio";
//El promediador es mi fuente  de sumador de digitos
describe ("Promedio",()=>{

   
    it("Primero debe sumer mis numeros",()=>{

        expect (promedio([1,2,4,8])).toEqual(15);

    });
  
    it ("Numero suma solo numeros menores a 1000",()=>{
        expect (promedio([1001,20.1004,20])).toEqual(40);

    });

});