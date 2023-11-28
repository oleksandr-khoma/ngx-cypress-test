describe("As User I should be able to use stepper component", () => {
  it("should test stepper functionality", () => {
    cy.visit("/pages/layout/stepper");
    cy.contains("button", "prev").should("have.attr", "disabled");
    for (let i = 1; i < 4; i++) {
      cy.contains("h3", `Step content #${i}`);
      cy.contains("button", "next").click();
    }
    cy.contains("h3", `Step content #4`);
    cy.contains("button", "next").should("have.attr", "disabled");
  });
});
