/* eslint-disable no-useless-constructor */
import { BaseAPI } from "./baseApi";


class DoctorAPI extends BaseAPI {
    constructor(baseURL) {
        super(baseURL);
    }



    verifyDoctor = (isVerified, id) => this.post('verifyDoctor', { isVerified, id });
    getAllDoctors = () => this.get('getAllDoctors');
    getAllVerifiedDoctor = () => {
        return this.get(`getAllVerifiedDoctor`)
    };

    getSingleDoctor = (id) => this.get(`doctorDetails/${id}`);

    getPatientIdByDoctorId = (id) => this.get(`patient_list_by_doctor_appointment/${id}`);
}

export const doctorApi = new DoctorAPI(process.env.REACT_APP_API_BASE_URL);