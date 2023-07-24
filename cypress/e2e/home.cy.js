describe('home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', { fixture: 'sampleTricks.json' }).as('getTricks');
    cy.intercept('POST', 'http://localhost:3001/api/v1/tricks', { stance: 'switch', name: 'Redneck Bono', obstacle: 'pool', tutorial: 'http://example.com', id: 9 }).as('postTrick');
    cy.visit('http://localhost:3000/')
  })

  it('should display a form and all trick cards on page load', () => {
    cy.wait('@getTricks'); 

    cy.get('.form__item')
      .should('have.length', 5)
    
      cy.get('.card')
        .should('have.length', 3)
        .first()
        .find('p')
        .first()
        .should('contain','treflip')
  })

  it('should update states when the form is filled out', () => {
    cy.wait('@getTricks');

    cy.get('#stance')
      .select('Regular')
      .should('have.value', 'Regular')

    cy.get('#trick__name')
      .type('The Jabronee')
      .should('have.value', 'The Jabronee')


    cy.get('#obstacle')
      .select('Pool')
      .should('have.value', 'pool')

    cy.get('#tutorial')
      .type('http://example.com')
      .should('have.value', 'http://example.com')
  })
  
  it('should add a new trick card to the DOM on submit', () => {
    cy.wait('@getTricks');

    cy.get('#stance')
      .select('Regular')

    cy.get('#trick__name')
      .type('The Jabronee')

    cy.get('#obstacle')
      .select('Pool')

    cy.get('#tutorial')
      .type('http://example.com')

    cy.get('#submit__trick')
      .click()
    
    cy.wait('@postTrick')
    
    cy.get('.card').should('have.length', 4)
  })

})