/* eslint-disable no-useless-constructor */
import { BaseAPI } from "./baseApi";


class AdminAPI extends BaseAPI {
    constructor(baseURL) {
        super(baseURL);
    }

    adminSignIn = (email, password) =>
        this.post(`admin/login`, { email, password });


    getAdminDetails = (email) => this.get(`getAllDoctors/${email}`);


}

export const adminApi = new AdminAPI(process.env.REACT_APP_API_BASE_URL);