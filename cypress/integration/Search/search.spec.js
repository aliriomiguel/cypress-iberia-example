const homePage = require('../../pages/homePage.js');


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
Then("I click Search button", ()=>{
    homePage.searchSearchButton();
})