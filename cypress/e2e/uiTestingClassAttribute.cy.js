it('find location 3 buttons: blue, green and yellow', { retries: 1 }, () => {
    cy.visit('http://uitestingplayground.com/classattr');

    // cy.get('.btn-primary').click();
    cy.get('.btn-primary').should('exist');
    cy.get('.btn-primary').should('be.visible');
    cy.get('.btn-primary').click();
});