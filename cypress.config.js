import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920, // Ekran kengligi
  viewportHeight: 1080, // Ekran balandligi
  e2e: {
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    // Cypress test fayllarini qaerdan izlashini sozlash
    specPattern: "cypress/e2e/**/*.spec.js", // component papkasidagi testlarni topadi
    devServer: {
      framework: "react", // agar siz React bilan ishlayotgan bo'lsangiz
      bundler: "vite", // webpack yoki boshqa bundlerni belgilang
    },
  },
});
