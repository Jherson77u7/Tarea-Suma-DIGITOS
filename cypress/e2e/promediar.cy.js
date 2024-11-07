describe ("Promedio",()=>{
    it("Probar si funciona el promedio",()=>{
        cy.visit("/");
        cy.get("#cadena-numeros").type("2,2,2");
        cy.get("#promedio-button").click();
        cy.get("#promedio-div").should("contain", "2");
        
    });
   
});