it('Fill in and submit the form. For successfull login use any non-empty user name and `pwd` as password', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/sampleapp');

    cy.get('[placeholder="User Name"]').type('myName');
    cy.get('[placeholder="********"]').type('pwd');
    cy.get('#login').click();
});

it('Fill in and submit the form. For successfull login use any non-empty user name and `pwd` as password', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/sampleapp');

    cy.get('[placeholder="User Name"]').type('myName');
    cy.get('[placeholder="********"]').type('123321');
    cy.get('#login').click();
    cy.get('#loginstatus').should('contain', 'Invalid username/password');
});