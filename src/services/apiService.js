import axios from "axios";
import {baseURL} from "../constans";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTA5M2I3MjQ1Y2M0NzBlNjZiNDIzY2IzMzcyOTViOCIsInN1YiI6IjY0YzI0ZjdmZGI0ZWQ2MDBlNGNhY2JkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.djZPp6QbPAzPd1cg5H28lYhh_ITobDtEYtayHMpNjXg';
// const token = process.env.REACT_APP_API_READ_ACCESS_TOKEN;
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
