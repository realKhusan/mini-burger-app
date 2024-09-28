describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });
  it("header", () => {
    //header ichida  Logo(img) borligini tekshirish
    cy.get("header img.logo").should("exist");

    //header ichida rasm borligini tekshirish uchun
    cy.get("header img").should("exist");

    //header ichida rasm Title borigini tekshirish
    cy.get("header").contains(`Только самые сочные бургеры!`).should("exist");

    //header ichida text(dastavka) borligini tekshirish
    cy.get("header").contains("Бесплатная доставка от 599₽").should("exist");

    //header ichida 2 ta knopka borligini tekshirsh
    cy.get("header button").should("have.length", 2);

    // Birinchi knopkani bosish
    cy.get("header button").first().click();

    // ikkinchi knopkani bosish
    cy.get("header button").first().click();
  });
});
