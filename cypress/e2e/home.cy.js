describe('home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', { fixture: 'sampleTricks.json' }).as('getTricks');
    cy.visit('http://localhost:3000/')
  })
  it('should display a form and all trick cards on page load', () => {
    cy.wait('@getTricks'); 

    cy.get('.form__item').should("have.length", 5)
    cy.get('.card').should("have.length", 3)
  })
})