/* global cy context */
import App from "./App";

describe("<App>", () => {
  beforeEach(() => {
    cy.mount(<App />);
  });
  context("Card tests", () => {
    it("card title should have text set to 'MeetYourMentor'", () => {
      cy.get(".card__title").contains("MeetYourMentor");
    });
  });

  context("Select menu tests", () => {
    it("Select Default value", () => {
      cy.get("#technologies").contains("Select a technology");
      cy.get("#mentors").contains("Select a mentor");
    });
    it("Technologies dropdown menu have all options", () => {
      cy.get("#technologies > option").should("have.length", 5);
    });
    it("Mentors dropdown menu have all options", () => {
      cy.get("#mentors > option").should("have.length", 3);
    });
  });
  context("Buttons tests", () => {
    it("Find button and click", () => {
      cy.get(".btn").click({ multiple: true });
    });
  });
});
