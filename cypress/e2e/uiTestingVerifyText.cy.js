it('Create a test that finds an element with Welcome... text.', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/verifytext');

    //  cy.get('.badge-secondary').contains('Welcome...');
     cy.get('.badge-secondary').should('contain','Welcome...');
}); 