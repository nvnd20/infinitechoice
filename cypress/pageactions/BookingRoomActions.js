import BookingRoomPageUIElements from "../uielements/BookingRoomPageUIElements"

class BookingRoomActions {
    static enterDetailsAndFindRooms(checkinDate, checkoutDate, numberOfRooms, numberOfAdults, numberOfChildren) {
        BookingRoomPageUIElements.getCheckin().then(function($input){
            $input[0].setAttribute('value', checkinDate)
        }).should('have.attr', 'value', checkinDate)

        BookingRoomPageUIElements.getCheckout().then(function($input){
            $input[0].setAttribute('value', checkoutDate)
        }).should('have.attr', 'value', checkoutDate)

        BookingRoomPageUIElements.getRooms().then(function($input){
            $input[0].setAttribute('value', numberOfRooms)
        }).should('have.attr', 'value', numberOfRooms)

        BookingRoomPageUIElements.getAdults().then(function($input){
            $input[0].setAttribute('value', numberOfAdults)
        }).should('have.attr', 'value', numberOfAdults)

        BookingRoomPageUIElements.getChildren().then(function($input){
            $input[0].setAttribute('value', numberOfChildren)
        }).should('have.attr', 'value', numberOfChildren)

        BookingRoomPageUIElements.getFindRooms().click({forece:true})
    }

    static bookFirstAvailableRoom() {
        BookingRoomPageUIElements.getFirstRoomFromList().within(() => {
            BookingRoomPageUIElements.getBookNowButton().click({force:true})
        })
    }
}
export default BookingRoomActions