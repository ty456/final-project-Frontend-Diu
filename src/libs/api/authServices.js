/* eslint-disable no-useless-constructor */
import { BaseAPI } from "./baseApi";


class AuthAPI extends BaseAPI {
    constructor(baseURL) {
        super(baseURL);
    }

    /**
     * User Sign in
     * @param mobileNumber
     * @param password
     * @returns
     */
    authSignin = (userType, email, password) =>
        this.post('auth/login', { userType, email, password });

    /**
     * Check if user is authenticate
     * @param ctx
     * @returns
     */

    /**
     * User Registration - First step
     * @param firstName
     * @param lastName
     * @param mobileNumber
     * @returns
     */
    authRegister = (body) =>
        this.post('auth/registration', body);

    updateProfile = (payload, id) => this.post(`auth/update-profile/${id}`, payload);

    getUserDetails = (email, userType) => this.get(`userDetail/${email}/${userType}`);
    getPatientDetailsById = (id) => this.get(`/patientDetailsById/${id}`);


}

export const authAPI = new AuthAPI(process.env.REACT_APP_API_BASE_URL);