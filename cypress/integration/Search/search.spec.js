const homePage = require('../../pages/homePage.js');
const loadingPage = require('../../pages/loadingPage.js');
const flightListPage = require('../../pages/flightListPage.js');

Given("I visit {string}", (url)=>{
    cy.visit(url);
})
And("I accept the cookies", ()=>{
    homePage.accptCookiesButton();
})
When("I add origin as {string}", (origin)=>{
    console.log(origin);
    homePage.searchOriginInput(origin);
})
And("I add destination as {string}", (destination)=>{
    homePage.searchDestinationInput(destination);
})
And("I add {string} as {string}", (travel,date)=>{
    homePage.searchDatesInput(travel,date);
})
And("I click Search button", ()=>{
    homePage.searchSearchButton();
})
And("I see the loading screen", ()=>{
    loadingPage.loadingCircleVisible();
})
And("I select departure flight", ()=>{
    flightListPage.departureTitleVisible();
    flightListPage.selectFirstEconomyDepartureButton();
    flightListPage.cabinsDepartureTableVisible();
    cy.wait(10000);
    cy.waitUntilAngularStable();
})
And("I select return flight", ()=>{
    flightListPage.returnTitleVisible();
    flightListPage.selectFirstEconomyReturnButton();
    flightListPage.cabinsReturnTableVisible();
})
And("I click Continue button", ()=>{
    flightListPage.clickContinueButton();
})