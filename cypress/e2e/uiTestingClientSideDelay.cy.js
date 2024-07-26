it('An element may appaear on a page after heavy JavaScript processing on a client side', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/clientdelay');

    cy.get('#ajaxButton').click();
    cy.get('.bg-success', { timeout: 20000 }).click();
    cy.get('.bg-success', { timeout: 1000 }).should('exist');
    cy.get('.bg-success', { timeout: 1000 }).should('be.visible');
    cy.get('.bg-success').contains('Data calculated on the client side.');
});