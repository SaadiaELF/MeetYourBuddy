/* global cy context */
import App from "./App";
import mentors from "./data/mentors";
const today = new Date().getDate();

describe("<App>", () => {
  beforeEach(() => {
    cy.mount(<App />);
  });
  context("Card tests", () => {
    it("card title should have text set to 'MeetYourMentor'", () => {
      cy.get(".card__title").contains("MeetYourMentor");
    });
  });

  context("Dropdown menus tests", () => {
    it("Select Default value", () => {
      cy.get("#technologies").contains("Select a technology");
      cy.get("#mentors").contains("Select a mentor");
    });
    it("Technologies dropdown menu have all options", () => {
      cy.get("#technologies > option").should("have.length", 5);
    });
    it("Select a technology option and get all the mentors", () => {
      cy.get("#technologies").select("HTML");
      cy.get("#mentors > option").should("have.length", 2);
    });
    it("Mentors dropdown menu have all options", () => {
      cy.get("#mentors > option").should("have.length", mentors.length + 1);
      cy.get("#mentors")
        .eq(0)
        .contains(`${mentors[0].firstName} ${mentors[0].lastName}`);
    });
  });
  context("Calendar tests", () => {
    it("Today's date is highlighted ", () => {
      cy.get(".p-highlight").should("have.text", today);
    });
    it("Show related dates when specific mentor selected", () => {
      cy.get("#mentors").select("Dom Vin");
      cy.get(".p-highlight").should(
        "have.length",
        Object.values(mentors[0].availability).length
      );
    });
  });
  context("Buttons tests", () => {
    it("Find button and click", () => {
      cy.get(".btn").click({ multiple: true });
    });
  });
});
