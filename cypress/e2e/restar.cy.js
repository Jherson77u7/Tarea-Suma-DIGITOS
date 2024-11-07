describe ("Restar",()=> {
    it ("Probar si RESTA DOS NUMEROS EN EL INTERFAZ",()=>{
        cy.visit("/");
        cy.get("#primer-numero-resta").type(5);
        cy.get("#segundo-numero-resta").type(4);
        cy.get("#restar-button").click();
        cy.get("#resta-div").should("contain", "1");

    });
});