describe(
  "As User I should be able to use smart table",
  { testIsolation: false },
  () => {
    before("Open smart-table page", () => {
      cy.visit("pages/tables/smart-table");
    });

    it("should check functionality for adding a new user", () => {
      cy.addNewUser("100", "Ola", "Marques", "@ola", "ola@yahoo.it", "24");
    });

    it("should check functionality for editing a user", () => {
      cy.editUser("101", "Nico", "Garnault", "@nico", "nico@gmail.fr", "32");
    });
  }
);
