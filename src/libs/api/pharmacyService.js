/* eslint-disable no-useless-constructor */
import { BaseAPI } from "./baseApi";


class PharmacyAPI extends BaseAPI {
    constructor(baseURL) {
        super(baseURL);
    }
    addPharmacy = (payload) => this.post('add-pharmacy', payload);
    getAllPharmacy = () => this.get('get-allPharmacy');
}

export const pharmacyApi = new PharmacyAPI(process.env.REACT_APP_API_BASE_URL);