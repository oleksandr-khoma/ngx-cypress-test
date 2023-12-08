Cypress.Commands.add(
  "addNewUser",
  (id, firstName, lastName, userName, email, age) => {
    const userInfo = [id, firstName, lastName, userName, email, age];
    cy.get(".ng2-smart-action-add-add").click();
    for (let i = 0; i < userInfo.length; i++) {
      cy.get(`[ng2-st-thead-form-row=""] > :nth-child(${i + 2})`)
        .clear()
        .type(`${userInfo[i]}`);
    }
    cy.get(".nb-checkmark").click();
    cy.get(userInfo).each((item) => {
      cy.get("tbody").contains(item);
    });
  }
);

Cypress.Commands.add(
  "editUser",
  (id, firstName, lastName, userName, email, age) => {
    const userInfo = [id, firstName, lastName, userName, email, age];
    cy.get("tbody")
      .find("tr")
      .first()
      .within(() => {
        cy.get(".ng2-smart-action-edit-edit").click();
        for (let i = 0; i < userInfo.length; i++) {
          cy.get("td input").eq(i).clear().type(userInfo[i]);
        }
        cy.get(".ng2-smart-action-edit-save").click();
      });
    cy.get(userInfo).each((item) => {
      cy.get("tbody").contains(item);
    });
  }
);

Cypress.Commands.add("login", (email, password) => {
  cy.get("[name='email']").type(email);
  cy.get("[name='password']").type(password);
  cy.get("[name='rememberMe']").click();
  cy.contains("button", "Log In").click();
  cy.url().should("contain", "pages");
});

Cypress.Commands.add("getPostById", (postId) => {
  return cy
    .request({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    })
    .should((response) => {
      expect(response.status).to.equal(200);
    })
    .its("body");
});

Cypress.Commands.add("getPosts", () => {
  return cy
    .request({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts`,
    })
    .should((response) => {
      expect(response.status).to.equal(200);
    })
    .its("body");
});

Cypress.Commands.add("createNewPost", (postData) => {
  return cy
    .request({
      method: "POST",
      url: `https://jsonplaceholder.typicode.com/posts`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(postData),
    })
    .should((response) => {
      expect(response.status).to.equal(201);
    })
    .its("body");
});

Cypress.Commands.add("updatePost", (postId, postData) => {
  return cy
    .request({
      method: "PUT",
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(postData),
    })
    .should((response) => {
      expect(response.status).to.equal(200);
    })
    .its("body");
});

Cypress.Commands.add("deletePost", (postId) => {
  return cy
    .request({
      method: "DELETE",
      url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    })
    .should((response) => {
      expect(response.status).to.equal(200);
    })
    .its("body");
});
