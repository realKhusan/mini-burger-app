// cypress/support/index.d.ts
declare namespace Cypress {
  interface Chainable {
    mount: typeof import("@cypress/react").mount;
  }
}
