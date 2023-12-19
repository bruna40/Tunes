/* eslint-disable no-undef */
Cypress.Commands.add('getByData', (selector) => cy.get(`[data-test=${selector}]`));


Cypress.Commands.add('loginAndOpenAlbum', () => {
    // Fazer login
    cy.visit('/'); // Substitua '/login' pela rota real da sua página de login
    cy.getByData('login-name-input').type('Bruna');
    cy.getByData('login-submit-button').click();
    cy.url().should('include', '/search');
  
    cy.getByData('search-artist-input').type('rbd');
    cy.getByData('search-artist-button').click();
    cy.wait(3000)

    cy.getByData('music-card').first().click();
    cy.visit('/album/1529353092')
    cy.wait(4000)

        
});