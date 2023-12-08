import newPostData from "../fixtures/newPostData.json";
import updatePostData from "../fixtures/updatePostData.json";

describe("As User I should be able to send API request", () => {
  it("should check GET request for single post", () => {
    cy.getPostById(1).then((response) => {
      expect(response.id).to.equal(1);
      expect(response.userId).to.equal(1);
      expect(response.body).to.be.a("string");
      expect(response.title).to.be.a("string");
    });
  });

  it("should check GET request for posts list", () => {
    cy.getPosts().then((response) => {
      expect(response).to.have.lengthOf(100);
      response.forEach((element) => {
        expect(element.body).to.be.a("string");
        expect(element.title).to.be.a("string");
        expect(element.id).to.be.a("number");
        expect(element.userId).to.be.a("number");
      });
    });
  });

  it("should check POST request for creating new post", () => {
    cy.createNewPost(newPostData).then((response) => {
      expect(response.body).to.be.eq(newPostData.body);
      expect(response.title).to.be.eq(newPostData.title);
      expect(response.userId).to.be.eq(newPostData.userId);
    });
  });

  it("should check PUT request for post updating", () => {
    cy.updatePost(1, updatePostData).then((response) => {
      expect(response.body).to.be.eq(updatePostData.body);
      expect(response.title).to.be.eq(updatePostData.title);
      expect(response.userId).to.be.eq(updatePostData.userId);
      expect(response.id).to.be.eq(updatePostData.id);
    });
  });

  it("should check DELETE request for post deletion", () => {
    cy.deletePost(1).then((response) => {
      assert.deepEqual(response, {});
    });
  });
});
