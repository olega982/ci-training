describe ('Headless suilte',()=>{
    beforeEach('Visit the page',()=>{
        cy.visit('http://localhost:4200/')
    })
    it('First test, bitch',()=>{
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('[data-cy="imputEmail1"]').type(Cypress.env('email'))
        cy.get('#inputPassword2').type(Cypress.env('password'))
        cy.contains('nb-card','Using the Grid').should('contain','Sign in')
        cy.contains('nb-card','Sign in').click()
    })
})