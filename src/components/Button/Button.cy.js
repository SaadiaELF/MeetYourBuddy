/* eslint-disable no-undef */
import Button from "./Button";

describe("<Button>", () => {
  it("Find button and click", () => {
    cy.mount(<Button />);
    cy.get(".btn").click();
  });
});
