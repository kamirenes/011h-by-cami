// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('react-router-dom')) {
    return false;
  }
});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('index.mjs') || err.message.includes('source-map-loader')) {
    return false; // ❌ Evita que Cypress falle por este error
  }
});