// ***********************************************************
// This example support/e2e.js is processed and
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
//import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // do something with the error, such as logging it or handling it in a custom way
    return false // return false to prevent Cypress from failing the test
})

afterEach(() => {
    const screenshotsFolder = Cypress.config("screenshotsFolder");
    if (window.cucumberJson?.generate) {
        console.log("Hola");
        const testState = window.testState;
        const stepResult =
            testState.runTests[testState.currentScenario.name][testState.currentStep];
        if (stepResult?.status === "failed") {
            const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`;
            cy.readFile(
                `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,
                "base64"
            ).then((imgData) => {
                stepResult.attachment = {
                    data: imgData,
                    media: { type: "image/png" },
                    index: testState.currentStep,
                    testCase: testState.formatTestCase(testState.currentScenario),
                };
            });

        }
    }
});

// Alternatively you can use CommonJS syntax:
// require('./commands')