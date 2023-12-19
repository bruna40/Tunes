/* eslint-disable no-undef */
describe('Testa a tela Album', () => {
    beforeEach(() => {
        cy.loginAndOpenAlbum()
    })

    it("testar se a tela existe", () => {
        cy.getByData("page-album").should('exist')
    })

    it('Se tem os elementos em tela', () => {
        cy.getByData('artist-name').should('exist').and('have.text', 'RBD');
        cy.getByData('album-name').should('exist').and('have.text', 'Rebelde');

        cy.getByData("music-1529353094").should('exist')
    })
})