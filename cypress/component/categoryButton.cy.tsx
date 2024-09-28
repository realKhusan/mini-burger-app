import React from "react";
import CategoryButton from "../../src/components/categoryButton";

describe("<CategoryButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CategoryButton img="image" title="burger" />);
  });
});
