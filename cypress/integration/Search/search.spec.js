const HomePage = require('../../pages/HomePage.js');
const LoadingPage = require('../../pages/LoadingPage.js');
const FlightListPage = require('../../pages/FlightListPage.js');
const PassengerInfoPage = require('../../pages/PassengerInfoPage.js');

Given("I visit {string}", (url)=>{
    cy.visit(url);
})
And("I accept the cookies", ()=>{
    HomePage.accptCookiesButton();
})
When("I add origin as {string}", (origin)=>{
    console.log(origin);
    HomePage.searchOriginInput(origin);
})
And("I add destination as {string}", (destination)=>{
    HomePage.searchDestinationInput(destination);
})
And("I add {string} as {string}", (travel,date)=>{
    HomePage.searchDatesInput(travel,date);
})
And("I click Search button", ()=>{
    HomePage.searchSearchButton();
})
And("I see the loading screen", ()=>{
    LoadingPage.loadingCircleVisible();
})
And("I select departure flight", ()=>{
    FlightListPage.departureTitleVisible();
    FlightListPage.selectFirstEconomyDepartureButton();
    FlightListPage.cabinsDepartureTableVisible();
    cy.wait(10000);
    cy.waitUntilAngularStable();
})
And("I select return flight", ()=>{
    FlightListPage.returnTitleVisible();
    FlightListPage.selectFirstEconomyReturnButton();
    FlightListPage.cabinsReturnTableVisible();
})
And("I click Continue button", ()=>{
    FlightListPage.clickContinueButton();
})
And("I fill the passengers name with {string}", (name)=>{
    PassengerInfoPage.formNameInput(name);
})
And("I fill the passengers surname with {string}", (surname)=>{
    PassengerInfoPage.formSurname(surname);
})
And("I fill the contact name with {string}", (contactName)=>{
    PassengerInfoPage.formContactName(contactName);
})
And("I fill the contact surname with {string}", (contactSurname)=>{
    PassengerInfoPage.formContactSurname(contactSurname);
})        
And("I fill the contact email with {string}", (email)=>{
    PassengerInfoPage.formContactEmail(email);
})
And("I fill the contact repeat email with {string}", (email)=>{
    PassengerInfoPage.formContactRepeatEmail(email);   
})
And("I fill the contact phone with {string}", (phone)=>{
    PassengerInfoPage.formContactPhone(phone);
})
And("I check the disable offers checkbox", ()=>{
    PassengerInfoPage.formContactCheckbox();
})
And("I click form Continue button", ()=>{
    PassengerInfoPage.formContactContinueButton();
})