class LoadingPage{

    elements = {
        loadingCircle: () => cy.get('#bbki-loading-plane')
    }

    loadingCircleVisible(){
        this.elements.loadingCircle().should('be.visible');
    }

}

module.exports = new LoadingPage();