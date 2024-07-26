it('should click Start, wait for progress bar to reach 75%, then click Stop', () => {
    cy.visit('http://uitestingplayground.com/progressbar'); // replace with your website URL

    // Click the Start button
    cy.get('.btn-primary').click();

    // Wait for the progress bar to reach 75%
    cy.get('#progressBar', { timeout: 20000 }).should(($progressBar) => {
        const percent = parseInt($progressBar.attr('aria-valuenow'));

        expect(percent).to.be.gte(75);
    });

    // Click the Stop button
    cy.get('#stopButton').click();
});
  
  

    // cy.get('#startButton').click();
    // cy.get('#stopButton', { timeout: 25000 }).click();
