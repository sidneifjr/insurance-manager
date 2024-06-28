describe('header', () => {
  it('checks if header is rendered correctly', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="header"]').should('have.text', 'Sebastian')
  })
})
