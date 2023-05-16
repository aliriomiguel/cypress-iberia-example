class HomePage{
    
    elements ={
        originInput : () => cy.get("#flight_origin1"),
        destinationInput : () => cy.get("#flight_destiny1"),
        dateLabel : () => cy.get('label'),
        searchButton : () => cy.get("#buttonSubmit1 > span.ibe-button__text"),
        acceptCookies : () => cy.get("#onetrust-accept-btn-handler")
    }    

    searchOriginInput(string){
        this.elements.originInput().click();
        this.elements.originInput().type(string);
    }    
    searchDestinationInput(string){
        this.elements.destinationInput().click({ force: true });
        this.elements.destinationInput().type(string);
    }
    searchDatesInput(travel,date){
        this.elements.dateLabel().contains(travel).click().type(date);
    }    
    searchSearchButton(){
        this.elements.searchButton().click();
    }
    accptCookiesButton(){
        this.elements.acceptCookies().click();
    }
}

module.exports = new HomePage();