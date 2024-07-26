it('This is a page with a Shadow DOM component guid-generator. Using it one can generate a guid and copy it to the clipboard', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/shadowdom');

    cy.get('.fa.fa-cog').click();
    // cy.get('#buttonCopy').click();
    
});