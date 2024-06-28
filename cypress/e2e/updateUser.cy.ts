describe('update user', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should trigger a user modification', () => {
    cy.get('[data-testid="update-user"]').first().click()

    cy.findAllByText('Item has been updated in the database.').should('exist')
  })
})
