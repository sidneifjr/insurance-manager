describe('delete user', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should trigger a user deletion', () => {
    cy.get('[data-testid="delete-user"]').first().click()

    cy.findAllByText('Item has been deleted from database.').should('exist')
  })
})
