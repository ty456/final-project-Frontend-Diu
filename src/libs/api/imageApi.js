/* eslint-disable no-useless-constructor */
import { BaseAPI } from "./baseApi";

class ImageAPI extends BaseAPI {
    constructor(baseURL) {
        super(baseURL);
    }

    uploadImageToBB = (imageData) => this.image(`upload`, imageData)
}

export const imageApi = new ImageAPI(process.env.REACT_APP_API_IMAGE_URL);