/* eslint-disable no-undef */
import Card from "./Card";

describe("<Card>", () => {
  it("mounts", () => {
    cy.mount(<Card />);
    cy.get(".card__title").should("have.text", "MeetYourMentor");
  });
});
