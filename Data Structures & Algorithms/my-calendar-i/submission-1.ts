type Appointment = Array<number>

class MyCalendar {
    bookings: Array<Array<number>>

    // bookings intervals : [[5,7] , [7,9]]
    // .push([5,7])
    // booking([4,8]) startTime < 
    // 8 - 10 -> 7 - 8
    //Condicao -> startTime < startTimeBooked && endTimeBooked < endTime

    constructor() {
        this.bookings = []
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    book(startTime: number, endTime: number): boolean {
        if (!this.bookings.length)
            this.bookings.push([startTime, endTime])
        else {
            for (const booking of this.bookings) {        
                if(this.isBookingOverlapping(booking,[startTime,endTime])){
                    return false
                }
            }
        }

        this.bookings.push([startTime,endTime])

        return true
    }

    private isBookingOverlapping(booked: Appointment, attempted: Appointment) {
        const [bookingStart, bookingEnd] = booked
        const [startTime, endTime] = attempted

        return !(endTime <= bookingStart || startTime >= bookingEnd)
    }
}
