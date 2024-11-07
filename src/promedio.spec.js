import promedio from "./promedio";

describe ("Promedio",()=>{

    it("Primera Falla de PROMEDIO ", ()=>{
        expect (promedio([1,3,4])).toBeCloseTo(2.67,2);
        
    });
    it("Primera Falla de PROMEDIO ", ()=>{
        expect (promedio([0])).toBeCloseTo(0,2);
        
    });
    it("Primero debe sumer mis numeros",()=>{

        expect (promedio([1,2,4,8])).toEqual(15);

    });

});