import ConfirmBookingPageUIElements from "../uielements/ConfirmBookingPageUIElements";
import Chance from "chance";

class ConfirmBookingActions{
    static confirmBooking(firstName, lastName, email, phone, streetAddress, city, state, zip, cardNumber, cardType, expYear, creditCardVerification){
        ConfirmBookingPageUIElements.getFirstName().type(firstName)
        ConfirmBookingPageUIElements.getLastName().type(lastName)
        ConfirmBookingPageUIElements.getEmail().type(email)
        ConfirmBookingPageUIElements.getContactPhone().type(phone)
        ConfirmBookingPageUIElements.getStreetAddress().type(`${streetAddress}{enter}`)
        ConfirmBookingPageUIElements.getCity().type(city)
        ConfirmBookingPageUIElements.getState().click().then(() => {
            ConfirmBookingPageUIElements.getState().parent().within(() => {
                cy.contains(state).click({force:true})
            })
        })
        ConfirmBookingPageUIElements.getZip().type(zip)

        ConfirmBookingPageUIElements.getFirstNameOnCard().type(firstName)
        ConfirmBookingPageUIElements.getLastNameOnCard().type(lastName)
        ConfirmBookingPageUIElements.getCreditCardNumber().type(cardNumber)
        ConfirmBookingPageUIElements.getCardType()
        .then(function($input){
            $input[0].setAttribute('value', cardType)
        }).should('have.attr', 'value', cardType)
        ConfirmBookingPageUIElements.getCardExpiryYear().click().then(() => {
            ConfirmBookingPageUIElements.getCardExpiryYear().parent().within(() => {
                cy.contains(expYear).click({force:true})
            })
        })
        ConfirmBookingPageUIElements.getCreditCardVerification().type(creditCardVerification)
        ConfirmBookingPageUIElements.getCompleteReservationButton().click({force:true})
    }

    static verifyAlertMessage(){
        ConfirmBookingPageUIElements.getAlertMessage("Credit card number or card holder data is incorrect.")
    }
}

export default ConfirmBookingActions