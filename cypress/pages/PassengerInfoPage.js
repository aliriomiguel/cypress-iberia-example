class PassengerInfoPage{

    elements = () => {
        nameInput: () => cy.get('#name_0');
        surnameInput: () => cy.get('#first_surname_0');

        contactName: () => cy.get('#register_name');
        contactSurname: () => cy.get('#register_surname');
        contactEmail: () => cy.get('#IBAIRP_CONTACT_FORM_EMAIL');
        contactRepeatEmail: () => cy.get('#IBAIRP_CONTACT_FORM_REPEATED_EMAIL');
        contactPhone: () => cy.get('#IBAIRP_CONTACT_FORM_PHONE');
        contactCheckbox: () => cy.get('#bbki-passenger-info-passengers-contact-form > fieldset > fieldset > div > div > div > div.ib-box-separated__body > div > div.ib-check > label');
        continueButton: () => cy.get('#AVAILABILITY_CONTINUE_BUTTON');

    }

    formNameInput(name){
        this.elements.nameInput().click();
        this.elements.nameInput().keys(name);
    }
    formSurname(surname){
        this.elements.surnameInput().click();
        this.elements.surnameInput().keys(surname);
    }
    formContactName(contact_name){
        this.elements.contactName().click();
        this.elements.contactName().keys(contact_name);
    }
    formContactSurname(contact_surname){
        this.elements.contactSuname().click();
        this.elements.contactSurname().keys(contact_surname);
    }
    formContactEmail(contact_email){
        this.elements.contactEmail().click();
        this.elements.contactEmail().keys(contact_email);
    }
    formContactRepeatEmail(contact_email){
        this.elements.contactRepeatEmail().click();
        this.elements.contactRepeatEmail().keys(contact_email);
    }
    formContactEmail(contact_phone){
        this.elements.contactPhone().click();
        this.elements.contactPhone().keys(contact_phone);
    }
    formContactCheckbox(){
        this.elements.contactCheckbox().click();
    }
    formContactContinueButton(){
        this.elements.continueButton().click();
    }
}