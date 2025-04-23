describe('Principal Layout', () => {
  it('should display layout with header and sider', () => {
    cy.visit('/');
    cy.document().then((doc) => {
    console.log(doc.body.innerHTML);
    });
    cy.get('.ant-layout-header', { timeout: 8000 }).should('exist');
    cy.get('.ant-menu', { timeout: 8000 }).should('exist');
  });
  

  it('should navigate to products from dropdown menu', () => {
    cy.visit('/');
    cy.contains('Products').click();
    cy.url().should('include', '/products');
  });
});
