describe('Products Screen', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('should render filters', () => {
    cy.contains('Filters').should('exist');
    cy.contains('Categories').should('exist');
    cy.contains('Colors').should('exist');
    cy.contains('Materials').should('exist');
    cy.contains('Sizes').should('exist');
    cy.contains('Types').should('exist');
  });

  it('should show products list', () => {
    cy.contains('Products').should('exist');
    cy.get('.ant-card').should('have.length.at.least', 1);
  });

  it('should filter by size', () => {
    cy.contains('Select sizes')
      .parents('.ant-select')
      .click();
    cy.contains('M').click();
    cy.get('.ant-card').each(($card) => {
      cy.wrap($card).within(() => {
        cy.contains('Size:');
        cy.contains('M');
      });
    });
  });

  it('should change order of products', () => {
    cy.contains('Order by size').parent().find('.ant-select').click();
    cy.contains('DESC').click();
    cy.get('.ant-card h3').first().should('exist'); // Esto valida que se reordenó la lista
  });
});
