class ConfirmBookingPageUIElements {
    static firstName = '[id*=first_name]'
    static lastName = '[id*=last_name]'
    static email = '#email'
    static contactPhone = '#phone'
    static streetAddress = '#bill_address'
    static city = '#bill_city'
    static state = '#billing_state'
    static zip = '#bill_zip'
    static firstNameOnCard = '#bill_first'
    static lastNameOnCard = '#bill_last'
    static creditCardNumber = '#credit_card_number'
    static cardType = '#credit_card_brand'
    static cardExpiryYear = '#cc_expyear'
    static creditCardVerification = '#credit_card_verification'
    static completeReservationButton = 'Complete reservation'
    static alertMessage = '[class*=alert-danger]'
    
    static getFirstName(){
        return cy.get(this.firstName)
    }

    static getLastName(){
        return cy.get(this.lastName)
    }

    static getEmail(){
        return cy.get(this.email)
    }

    static getContactPhone(){
        return cy.get(this.contactPhone)
    }

    static getStreetAddress(){
        return cy.get(this.streetAddress)
    }

    static getCity(){
        return cy.get(this.city)
    }

    static getState(){
        return cy.get(this.state)
    }

    static getZip(){
        return cy.get(this.zip)
    }

    static getFirstNameOnCard(){
        return cy.get(this.firstNameOnCard)
    }

    static getLastNameOnCard(){
        return cy.get(this.lastNameOnCard)
    }

    static getCreditCardNumber(){
        return cy.get(this.creditCardNumber)
    }

    static getCardType(){
        return cy.get(this.cardType)
    }

    static getCardExpiryYear(){
        return cy.get(this.cardExpiryYear)
    }

    static getCreditCardVerification(){
        return cy.get(this.creditCardVerification)
    }

    static getCompleteReservationButton(){
        return cy.contains(this.completeReservationButton)
    }

    static getAlertMessage(){
        return cy.get(this.alertMessage)
    }

}
export default ConfirmBookingPageUIElements