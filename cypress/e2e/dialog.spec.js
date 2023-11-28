describe("As User I should be able to use dialog component", () => {
  before("", () => {
    cy.visit("/pages/modal-overlays/dialog");
    cy.contains("button", "Enter Name").click();
    cy.wrap(".ng-star-inserted").as("dialogWindow");
  });

  it("should check dialog window elements", () => {
    cy.get("@dialogWindow").then((dialog) => {
      cy.contains(`${dialog} nb-card-header`, "Enter your name");
      cy.get(`${dialog} nb-card-body input`).should(
        "have.attr",
        "placeholder",
        "Name"
      );
      cy.contains(`${dialog} nb-card-footer .cancel`, "Cancel");
      cy.contains(`${dialog} nb-card-footer .status-success`, "Submit");
    });
  });
});
