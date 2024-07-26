it('Execute the test to make sure that green button can not be hit twice', { retries: 1 }, () => {
    cy.visit('http://uitestingplayground.com/hiddenlayers');

    cy.get('#greenButton').should('exist');
    cy.get('#greenButton').should('be.visible');
    cy.get('#greenButton').click();
    cy.get('#blueButton').should('exist');
    cy.get('#blueButton').should('be.visible');
    cy.get('#blueButton').click();
});