describe('Test Main page', () => {
  it('Find root element content', () => {
    cy.visit('http://localhost:8080/');
    cy.contains('Hi');
  });
});
