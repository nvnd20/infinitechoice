class BookingRoomPageUIElements {
    static checkin = '#check_in_view'
    static checkout = '#check_out_view'
    static rooms = '#rooms'
    static adults = '[id*=adults]'
    static children = '[id*=children]'
    static findRooms = '[class*=search-button]'
    static checkInDatePicker = '[class*=js-check-in]'
    static hotelRoomsList = '[class*=group-items]'
    static roomDetails = '[class*=about-room]'
    static bookNowButton = '[class*=btn-warning]'

    static getCheckin() {
        return cy.get(this.checkin)
    }

    static getCheckout(){
        return cy.get(this.checkout)
    }

    static getRooms() {
        return cy.get(this.rooms)
    }

    static getAdults() {
        return cy.get(this.adults)
    }

    static getChildren() {
        return cy.get(this.children)
    }

    static getFindRooms() {
        return cy.get(this.findRooms)
    }

    static getCheckInDatePicker(){
        return cy.get(this.checkInDatePicker)
    }

    static getHotelRoomsList() {
        return cy.get(this.hotelRoomsList)
    }

    static getFirstRoomFromList() {
        return cy.get(this.roomDetails).first()
    }

    static getBookNowButton() {
        return cy.get(this.bookNowButton)
    }
}
export default BookingRoomPageUIElements