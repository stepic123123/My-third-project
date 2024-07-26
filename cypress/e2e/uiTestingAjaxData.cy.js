it('An element may appaear on a page after processing of an AJAX request to a web server', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/ajax');

    cy.get('#ajaxButton').click();
    cy.get('.bg-success', { timeout: 20000 }).click();
    cy.get('.bg-success', { timeout: 1000 }).should('exist');
    cy.get('.bg-success', { timeout: 1000 }).should('be.visible');
    cy.get('.bg-success').contains('Data loaded with AJAX get request.');
});