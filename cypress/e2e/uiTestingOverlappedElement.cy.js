it('Entering text to a partially visible element may require scrolling it into view.', { retries: 2 }, () => {
    cy.visit('http://uitestingplayground.com/overlapped');

    cy.get('[placeholder="Name"]').scrollIntoView().type('Vadym');
    
}); 