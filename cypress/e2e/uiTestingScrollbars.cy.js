it('Find a button in the scroll view and record button click', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/scrollbars');

    cy.get('#hidingButton').scrollIntoView().click();
    cy.get('#hidingButton').should('exist');
    cy.get('#hidingButton').should('be.visible');
    cy.get('#hidingButton').contains('Hiding Button');
}); 