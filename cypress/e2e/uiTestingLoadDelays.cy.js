it('Navigate to Home page and record Load Delays link click and button click on this page', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/loaddelay');

    cy.get('.btn.btn-primary', { timeout: 5000 }).should('exist');
    cy.get('.btn.btn-primary', { timeout: 5000 }).should('be.visible');
    cy.get('.btn.btn-primary', { timeout: 5000 }).click();
});