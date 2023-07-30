import axios from "axios";
import {baseURL} from "../constans";

const token = process.env.REACT_APP_API_READ_ACCESS_TOKEN;
// const apiKey = process.env.REACT_APP_API_KEY;

const config = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
        // Authorization: `Bearer ${apiKey}`
    }
};

const apiService = axios.create({baseURL});

export {
    apiService,
    config
}