it('execute your test to make sure that ID is not used for button identification.', { retries: 1 }, () => {
    cy.visit('http://uitestingplayground.com/dynamicid');

    cy.get('.btn.btn-primary').click();
    cy.get('.btn.btn-primary').should('exist');
    cy.get('.btn.btn-primary').should('be.visible');
    cy.get('.btn.btn-primary').click();

});