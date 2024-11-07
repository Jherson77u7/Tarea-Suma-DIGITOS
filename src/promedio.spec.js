import promedio from "./promedio";

describe ("Promedio",()=>{

   
    it("Primero debe sumer mis numeros",()=>{

        expect (promedio([1,2,4,8])).toEqual(15);

    });

});