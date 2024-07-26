it('Record setting text into the input field and pressing the button', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/textinput?');

    cy.get('#updatingButton').should('exist');
    cy.get('#updatingButton').should('be.visible');
    cy.get('#updatingButton').contains('Button That Should Change it\'s Name Based on Input Value');
    cy.get('[placeholder="MyButton"]', { timeout: 1000 }).type('my');
    cy.get('#updatingButton').click();
    cy.get('#updatingButton').contains('my');
    cy.get('#updatingButton').should('be.visible');
    
}); 