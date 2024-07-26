it('Record button click. The button becomes green after clicking.', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/click');
    
    cy.get('.btn.btn-primary', { timeout: 1000 }).should('exist');
    cy.get('.btn.btn-primary', { timeout: 1000 }).should('be.visible');
    cy.get('.btn.btn-primary').click();
    cy.get('.btn.btn-success').click();
    cy.get('.btn.btn-success', { timeout: 1000 }).should('exist');
    cy.get('.btn.btn-success', { timeout: 1000 }).should('be.visible');
    cy.get('.btn.btn-success').should('not.have.class', 'btn-primary');
    // cy.get('#badButton').should('have.class', '#badButton');
});