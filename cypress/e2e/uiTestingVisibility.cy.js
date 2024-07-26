it('Checking if element is visible on screen may be a non trivial task', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/visibility');

    cy.get('#hideButton').click();
    cy.get('#removedButton').should('not.exist');
   });