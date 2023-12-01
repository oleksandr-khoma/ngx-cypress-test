describe("As User I should be able to login", () => {
  before("Open login page", () => {
    cy.visit("auth/login");
  });
  it("should check login functionality", () => {
    cy.login("oleksandr.khoma@test.com", "123qwe123QWE");
  });
});
