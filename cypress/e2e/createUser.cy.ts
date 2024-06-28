describe('create user', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should trigger a modal opening', () => {
    cy.get('[data-testid="modal-create-user"]')
      .should('have.text', 'Cadastrar item')
      .click()

    cy.get('[data-testid="modal-header"').should('have.text', 'Adicionar item')
  })

  it('should trigger a modal closure', () => {
    cy.get('[data-testid="modal-create-user"]')
      .should('have.text', 'Cadastrar item')
      .click()

    cy.get('[data-testid="modal-header"').should('have.text', 'Adicionar item')

    cy.get('[data-testid="modal-close"').click()

    cy.should('not.have.text', 'Adicionar item')
  })

  it('should trigger error across all inputs in the modal', () => {
    cy.get('[data-testid="modal-create-user"]')
      .should('have.text', 'Cadastrar item')
      .click()

    cy.get('[data-testid="modal-header"').should('have.text', 'Adicionar item')
    cy.get('[data-testid="modal-submit"]').click()

    cy.get('[data-testid="error-numero"]').should('exist')
    cy.get('[data-testid="error-valorPremio"]').should('exist')
    cy.get('[data-testid="error-nome"]').should('exist')
    cy.get('[data-testid="error-email"]').should('exist')
    cy.get('[data-testid="error-cpfCNPJ"]').should('exist')
    cy.get('[data-testid="error-coberturas"]').should('exist')
  })

  it('should trigger a successful creation of a new user', () => {
    cy.get('[data-testid="modal-create-user"]')
      .should('have.text', 'Cadastrar item')
      .click()

    cy.get('[data-testid="modal-header"').should('have.text', 'Adicionar item')

    cy.get('[data-testid="numero"]').type('512475')
    cy.get('[data-testid="valorPremio"]').type('849.53')
    cy.get('[data-testid="nome"]').type('Sidnei Farias Júnior')
    cy.get('[data-testid="email"]').type('johndoe.47@gmail.com')
    cy.get('[data-testid="cpfCNPJ"]').type('u9q4jTqKTGW')
    cy.get('[data-testid="coberturas"]').type('Incêndio; 247,65')

    cy.get('[data-testid="modal-submit"]').click()

    cy.findAllByText(
      'Item has been successfully added to the database!',
    ).should('exist')
  })
})
