import BookingRoomActions from "../../pageactions/BookingRoomActions"
import ConfirmBookingActions from "../../pageactions/ConfirmBookingActions"

describe('Tests', () => {
    it('passes', () => {
        cy.visit('/aria-resort-casino/booking').then(() => {
            BookingRoomActions.enterDetailsAndFindRooms("Thu, Nov 23", "Thu, Nov 24", 1, 1, 0)
            BookingRoomActions.bookFirstAvailableRoom()
            ConfirmBookingActions.confirmBooking("John", "Doe", "john@abc.com", "9253455444", "2000 Bishop Drive", "San Ramon", "California", "94583", "4242424242424242", "Visa", "2025", "988")
            ConfirmBookingActions.verifyAlertMessage()
        })
    })
})