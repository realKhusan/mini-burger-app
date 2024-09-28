import React from "react";
import Card from "../../src/components/Card";
import { IProduct } from "../../src/types/types";
import { MemoryRouter } from "react-router-dom";

const item: IProduct = {
  id: "1",
  image:
    "https://yastatic.net/naydex/yandex-search/myGxS9341/6b2495TT/w0W1I1sJSLkKBomHwonJgtuGqyJkjUm83_kLqJ0hvm0sqMy22Qo9Te_wsJ3AdEw3WZUlDuZbfOu1OAIgQV4lcjNhkBdvzfyoz0O9lgfJSbKLp372VZyMHJoor41dxS64TFjcgF-NCm_8JzOKNyP7pozV8Asiz82P4672YeS6dC",
  title: "burger",
  price: 12345,
  weight: 12,
  desc: " this burger asd asd  sadjda ",
  sku: "burger",
  compound: ["asd", "asdas", "asdsa"],
  calories: 123,
  categoryId: "1",
};
describe("Product Card", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <MemoryRouter>
        <Card item={item} />
      </MemoryRouter>
    );
  });
});
