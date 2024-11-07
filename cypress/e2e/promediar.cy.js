describe ("Promedio",()=>{
    // it("Probar si funciona el promedio",()=>{
    //     cy.visit("/");
    //     cy.get("#cadena-numeros").type("2,2,2");
    //     cy.get("#promedio-button").click();
    //     cy.get("#promedio-div").should("contain", "2");
        
    // });
    it("Probar si suma un numero ejemplo 0 ",()=>{
        cy.visit("/");
        cy.get("#cadena-numeros").type("0");
        cy.get("#promedio-button").click(); 
        cy.get("#promedio-div").should("contain","0");
    });
    it("Probar si devuelve un numero ejemplo 2 ",()=>{
        cy.visit("/");  
        cy.get("#cadena-numeros").type("2");
        cy.get("#promedio-button").click();
        cy.get("#promedio-div").should("contain","2");
    });
    it("Probar si suma una cadena de numeros",()=>{
        cy.visit("/");  
        cy.get("#cadena-numeros").type("2,2,2");
        cy.get("#promedio-button").click();
        cy.get("#promedio-div").should("contain","6")
    });
    it("Probar si suma una cadena de numeros pero con caracter (-)",()=>{
        cy.visit("/");  
        cy.get("#cadena-numeros").type("2-2-2");
        cy.get("#promedio-button").click();
        cy.get("#promedio-div").should("contain","6")
    });
    it("Probar si suma una cadena de numeros pero con caracter (;)",()=>{
        cy.visit("/");  
        cy.get("#cadena-numeros").type("2,2-2;2");
        cy.get("#promedio-button").click();
        cy.get("#promedio-div").should("contain","8")
    });
    it("Probar si suma una cadena de numeros con varios delimitadores", () => {
        cy.visit("/");  
        cy.get("#cadena-numeros").type("3,2-2;2***2");
        cy.get("#promedio-button").click();
        cy.get("#promedio-div").should("contain", "11"); // Aquí puedes ajustar el resultado esperado a 2 según los cambios recientes de la función promedio.
    });
    
}); 