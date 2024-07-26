require('cypress-xpath');


it('Use the following xpath to find the button in your test', { retries: 1 }, () => {
    cy.visit('http://uitestingplayground.com/nbsp');


    
    cy.xpath(
        '/html/body/section/div/button'
    ).should('be.visible');
});