//import homePage from "../../../pages/homePage";
const homePage = require('../../pages/homePage.js');


Given("I visit {string}", (url)=>{
    cy.visit(url);
})
When("I add origin as {string}", (origin)=>{
    homePage.searchOriginInput(origin);
    
})
And("I add destination as {string}", (destination)=>{
    homePage.searchDestinationInput(destination);
})
And("I add departure date as {string}", (depDate)=>{
    homePage.searchDestinationInput(depDate);
})
And("I add return date as {string}", (retDate)=>{
    homePage.searchDestinationInput(retDate);
})
Then("I click Search button", ()=>{
    homePage.searchSearchButton();
})