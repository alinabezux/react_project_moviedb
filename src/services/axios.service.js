import axios from "axios";

import {baseURL} from "../configs";
import token from "../configs/token";

const axiosService = axios.create({baseURL});
axiosService.interceptors.request.use((config) => {
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default axiosService;


