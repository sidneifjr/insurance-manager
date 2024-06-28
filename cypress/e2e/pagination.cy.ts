describe('pagination', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have the first page of items as current', () => {
    cy.get('[data-testid="pagination-current-page"]').should('have.text', 1)
  })

  it('should move to next page', () => {
    cy.get('[data-testid="pagination-next"]').click()

    cy.get('[data-testid="pagination-current-page"]').should('have.text', 2)
  })

  it('should move to previous page', () => {
    cy.get('[data-testid="pagination-next"]').click()
    cy.get('[data-testid="pagination-current-page"]').should('have.text', 2)

    cy.get('[data-testid="pagination-prev"]').click()
    cy.get('[data-testid="pagination-current-page"]').should('have.text', 1)
  })
})
