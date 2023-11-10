import BookingRoomActions from "../pageactions/BookingRoomActions"
import ConfirmBookingActions from "../pageactions/ConfirmBookingActions"

class BookingRoomScenarios{
    cy.visit('/aria-resort-casino/booking').then(() => {
        BookingRoomActions.enterDetailsAndFindRooms("Thu, Nov 23", "Thu, Nov 24", 1, 1, 0)
        BookingRoomActions.bookFirstAvailableRoom()
        ConfirmBookingActions.confirmBooking()
      })
}
export default BookingRoomScenarios