/* eslint-disable no-undef */
import Card from "./Card";

describe("<Card>", () => {
  it("card title should have text set to 'MeetYourMentor'", () => {
    cy.mount(<Card />);
    cy.get(".card__title").should("have.text", "MeetYourMentor");
  });
});
