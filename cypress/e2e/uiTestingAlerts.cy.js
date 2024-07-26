it('Dealing with standard alerts, prompts and confirmations', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/alerts');

    cy.get('#alertButton').click();
    cy.get('#confirmButton').click();
    cy.get('#promptButton').click();
});