/* eslint-disable no-useless-constructor */
import { BaseAPI } from "./baseApi";


class BookingAPI extends BaseAPI {
    constructor(baseURL) {
        super(baseURL);
    }
    doctorBooking = (payload) => this.post('appointmentBooking', payload);
    finalBooking = (payload, bookingOrderId) => this.post('finalBooking', { payload, bookingOrderId });
    getBookingByDoctorId = (doctorId) => {
        console.log(doctorId);
        return this.get(`appointment-by-doctor/${doctorId}`);
    };
    updateAppointmentStatus = (appointmentStatus, id) => this.post('changeAppointmentStatus', { appointmentStatus, id })


}

export const bookingApi = new BookingAPI(process.env.REACT_APP_API_BASE_URL);