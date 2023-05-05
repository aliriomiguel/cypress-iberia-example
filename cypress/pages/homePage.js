class homePage{
    elements ={
        originInput : () => cy.get("#flight_origin1"),
        destinationInput : () => cy.get("#flight_destiny1"),
        dateDeparture : () => cy.get("#flight_round_date1"),
        dateBack : () => cy.get("#flight_return_date1"),
        searchButton : () =>cy.get("#buttonSubmit1 > span.ibe-button__text")
    }

    searchOriginInput(string){
        this.elements.originInput().type(string);
    }    
    searchDestinationInput(string){
        this.elements.destinationInput().type(string);
    }
    
    searchDateDeparture(string){
        this.elements.dateDeparture().type(string);
    }
    
    searchDateBack(string){
        this.elements.dateBack().type(string);
    }
    
    searchSearchButton(){
        this.elements.searchButton().click();
    }
}

module.exports = new homePage();