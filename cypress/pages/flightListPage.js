class flightListPage{

    elements = {
        departureTitle: () => cy.get('#bbki-availavility-availability-trip-0 > div > div.ib-content-heading.ib-content-heading--type-1.u-mt-small.u-mb-small > h1', { timeout: 50000 }),
        firstEconomyDepartureButton: () => cy.get('#bbki-ib-box-mini-fare-0-0-E'),
        cabinsDepartureTable:() => cy.get('#selectedSlice-E-1-0-selected > div', {timeout : 40000}),
        returnTitle: () => cy.get('#bbki-availavility-availability-trip-1 > div > div.ib-content-heading.ib-content-heading--type-1.u-mt-small.u-mb-small > h1', { timeout: 50000 }),
        firstEconomyReturnButton: () => cy.xpath('//*[@id="bbki-slice-info-cabin-1-0-E-btn"]'),
        cabinsReturnTable: () => cy.get('#selectedSlice-E-2-1-selected > div', {timeout:40000}),
        continueButton: () => cy.get('#AVAILABILITY_CONTINUE_BUTTON')
    }

    departureTitleVisible(){
        this.elements.departureTitle().should('be.visible');
    }
    returnTitleVisible(){
        this.elements.returnTitle().should('be.visible');
    }
    selectFirstEconomyDepartureButton(){
        this.elements.firstEconomyDepartureButton().click();
    }
    selectFirstEconomyReturnButton(){
        this.elements.firstEconomyReturnButton().click({ force: true });
    }
    cabinsDepartureTableVisible(){
        this.elements.cabinsDepartureTable().should('be.visible');
    }
    cabinsReturnTableVisible(){
        this.elements.cabinsReturnTable().should('be.visible');
    }
    clickContinueButton(){
        this.elements.continueButton().click();
    }

}

module.exports = new flightListPage();